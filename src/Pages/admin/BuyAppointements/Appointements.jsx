import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Form, Container, Row, Col, Table, Spinner } from "react-bootstrap";
import Footer from "../../../Components/Footer";
import TopHeader from "../../../Components/TopHeader";
import AdminHeader from "../../../Components/AdminHeader";

const AppointmentsData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const appointmentsCollection = collection(db, "appointments");
      const snapshot = await getDocs(appointmentsCollection);
      const appointmentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(appointmentsData);
    } catch (error) {
      console.error("Error fetching appointments: ", error);
      toast.error("Failed to fetch appointments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (appointmentId) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment.id === appointmentId
    );
    if (appointmentToEdit) {
      setCurrentAppointmentId(appointmentId);
      setFullName(appointmentToEdit.contact.fullName);
      setEmail(appointmentToEdit.contact.email);
      setShowModal(true);
    }
  };

  const handleDelete = async (appointmentId) => {
    setLoading(true);
    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await deleteDoc(appointmentRef);
      toast.success("Appointment deleted successfully!");
      fetchAppointments(); // Refresh appointments after deletion
    } catch (error) {
      console.error("Error deleting appointment: ", error);
      toast.error("Failed to delete appointment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (currentAppointmentId) {
        const appointmentRef = doc(db, "appointments", currentAppointmentId);
        await updateDoc(appointmentRef, {
          contact: { fullName, email },
        });
        toast.success("Appointment updated successfully!");
      } else {
        await addDoc(collection(db, "appointments"), {
          contact: { fullName, email },
        });
        toast.success("Appointment added successfully!");
      }
      setCurrentAppointmentId(null);
      setFullName("");
      setEmail("");
      fetchAppointments(); // Refresh appointments after update
      setShowModal(false);
    } catch (error) {
      console.error("Error updating appointment: ", error);
      toast.error("Failed to update appointment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <TopHeader />
      <AdminHeader />
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Appointments Data</h2>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive className="text-center">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>PhoneNumber</th>
                <th>Notes</th>
                <th>Actions</th>
                <th>Service Details</th>
                <th>Make</th>
                <th>Model</th>
                <th>Registration Number</th>
                <th>State</th>
                <th>Variant</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.contact.fullName}</td>
                  <td>{appointment.contact.email}</td>
                  <td>{appointment.appointment.appointmentDate}</td>
                  <td>{appointment.appointment.appointmentTime}</td>
                  <td>{appointment.appointment.PhoneNumber}</td>
                  <td>{appointment.contact.notes}</td>
                  <td>{appointment.services.selectedService}</td>
                  <td>{appointment.vehicleDetails.make}</td>
                  <td>{appointment.vehicleDetails.model}</td>
                  <td>{appointment.vehicleDetails.registrationNumber}</td>
                  <td>{appointment.vehicleDetails.state}</td>
                  <td>{appointment.vehicleDetails.variant}</td>
                  <td>{appointment.vehicleDetails.year}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="primary"
                      className="me-2"
                      onClick={() => handleEdit(appointment.id)}
                      disabled={loading}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(appointment.id)}
                      disabled={loading}
                    >
                      {loading ? "Deleting...." : "Delete"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <Footer />

      {/* Edit Appointment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentAppointmentId ? "Edit Appointment" : "Add Appointment"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="editFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Updating...." : "Update"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AppointmentsData;
