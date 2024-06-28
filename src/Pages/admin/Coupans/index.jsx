// AdminPage.js
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card, Table } from "react-bootstrap";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from "../../../firebase";
// import 'animate.css';
import Footer from "../../../Components/Footer";
import AdminHeader from "../../../Components/AdminHeader";

const Coupans = () => {
  const [couponCode, setCouponCode] = useState("");
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [editCouponId, setEditCouponId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    setLoading(true);
    setError("");
    try {
      const querySnapshot = await getDocs(collection(db, "coupons"));
      const couponsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCoupons(couponsData);
    } catch (error) {
      console.error("Error fetching coupons:", error);
      setError("Failed to fetch coupons");
    } finally {
      setLoading(false);
    }
  };

  const generateCouponCode = () => {
    return `COUPON-${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
  };

  const handleSaveCoupon = async () => {
    const code = autoGenerate ? generateCouponCode() : couponCode;
    if (!code || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      if (editCouponId) {
        const couponRef = doc(db, "coupons", editCouponId);
        await updateDoc(couponRef, {
          code,
          startDate,
          endDate
        });
        setEditCouponId(null);
      } else {
        await addDoc(collection(db, "coupons"), {
          code,
          startDate,
          endDate
        });
      }

      alert("Coupon saved successfully!");
      setCouponCode("");
      setStartDate("");
      setEndDate("");
      fetchCoupons();
    } catch (error) {
      console.error("Error saving coupon:", error);
      setError("Failed to save coupon");
    } finally {
      setLoading(false);
    }
  };

  const handleEditCoupon = (coupon) => {
    setCouponCode(coupon.code);
    setStartDate(coupon.startDate);
    setEndDate(coupon.endDate);
    setAutoGenerate(false);
    setEditCouponId(coupon.id);
  };

  const handleDeleteCoupon = async (id) => {
    setLoading(true);
    setError("");
    try {
      const couponRef = doc(db, "coupons", id);
      await deleteDoc(couponRef);
      alert("Coupon deleted successfully!");
      fetchCoupons();
    } catch (error) {
      console.error("Error deleting coupon:", error);
      setError("Failed to delete coupon");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader />
      <Container className="mt-5 animate__animated animate__fadeIn">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Manage Coupons</Card.Title>
                {error && <div className="alert alert-danger">{error}</div>}
                <Form>
                  <Form.Group controlId="formAutoGenerate">
                    <Form.Check
                      type="checkbox"
                      label="Auto-generate coupon code"
                      checked={autoGenerate}
                      onChange={() => setAutoGenerate(!autoGenerate)}
                    />
                  </Form.Group>
                  {!autoGenerate && (
                    <Form.Group controlId="formCouponCode">
                      <Form.Label>Coupon Code</Form.Label>
                      <Form.Control
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                      />
                    </Form.Group>
                  )}
                  <Form.Group controlId="formStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSaveCoupon} className="w-100 mt-3" disabled={loading}>
                    {editCouponId ? "Update Coupon" : "Save Coupon"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map(coupon => (
                  <tr key={coupon.id}>
                    <td>{coupon.code}</td>
                    <td>{coupon.startDate}</td>
                    <td>{coupon.endDate}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="mr-2"
                        onClick={() => handleEditCoupon(coupon)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteCoupon(coupon.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Coupans;
