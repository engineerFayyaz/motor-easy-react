import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Form, Button, Container, Row, Col, Table, Modal } from 'react-bootstrap';
import AdminHeader from '../../../Components/AdminHeader';
import Footer from '../../../Components/Footer';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import './AdminPricings.css'; // Assuming you have a CSS file for custom styles

const AdminPricings = () => {
  const services = [
    'Used Car warranty',
    'Vehicle inspection',
    'Vehicle Service',
    'Road Side',
    'Battery Replacement',
    'Windscreen Repair',
    'Home'
  ];

  const plans = ['PlanA', 'PlanALite', 'PlanC', 'PlanCLite'];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [pricingData, setPricingData] = useState({
    PlanA: { price: '', discount: '' },
    PlanALite: { price: '', discount: '' },
    PlanC: { price: '', discount: '' },
    PlanCLite: { price: '', discount: '' }
  });
  const [pricings, setPricings] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchPricings();
  }, []);

  const fetchPricings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Pricings_Admin'));
      const pricingList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPricings(pricingList);
    } catch (error) {
      console.error('Error fetching pricing data:', error);
      toast.error('Failed to fetch pricing data.');
    }
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleInputChange = (e, plan, field) => {
    const { value } = e.target;
    setPricingData({
      ...pricingData,
      [plan]: {
        ...pricingData[plan],
        [field]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateDoc(doc(db, 'Pricings_Admin', editing.id), {
          service: selectedService,
          pricing: pricingData,
          currency: 'AU$'
        });
        toast.success('Pricing data updated successfully!');
      } else {
        await addDoc(collection(db, 'Pricings_Admin'), {
          service: selectedService,
          pricing: pricingData,
          currency: 'AU$'
        });
        toast.success('Pricing data saved successfully!');
      }
      setPricingData({
        PlanA: { price: '', discount: '' },
        PlanALite: { price: '', discount: '' },
        PlanC: { price: '', discount: '' },
        PlanCLite: { price: '', discount: '' }
      });
      setSelectedService(services[0]);
      setEditing(null);
      fetchPricings();
      setShowModal(false);
    } catch (error) {
      console.error('Error saving pricing data:', error);
      toast.error('Failed to save pricing data.');
    }
  };

  const handleEdit = (pricing) => {
    setSelectedService(pricing.service);
    setPricingData(pricing.pricing);
    setEditing(pricing);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Pricings_Admin', id));
      toast.success('Pricing data deleted successfully!');
      fetchPricings();
    } catch (error) {
      console.error('Error deleting pricing data:', error);
      toast.error('Failed to delete pricing data.');
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const displayPricings = pricings.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <>
      <AdminHeader />
      <Container fluid="md">
        <h1 className="my-4">Add or Edit Pricing for Services</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Select Service</Form.Label>
            <Col sm={10}>
              <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          {plans.map((plan) => (
            <div key={plan}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>{plan} Price</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name={`${plan}_price`}
                    value={pricingData[plan].price}
                    onChange={(e) => handleInputChange(e, plan, 'price')}
                    placeholder={`Enter price for ${plan} in AU$`}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>{plan} Discount</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name={`${plan}_discount`}
                    value={pricingData[plan].discount}
                    onChange={(e) => handleInputChange(e, plan, 'discount')}
                    placeholder={`Enter discount price for ${plan} in AU$`}
                  />
                </Col>
              </Form.Group>
            </div>
          ))}
          <Button type="submit" variant="primary">{editing ? 'Update Pricing' : 'Save Pricing'}</Button>
        </Form>
        <h2 className="my-4">Pricing List</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>PlanA Price</th>
              <th>PlanA Discount</th>
              <th>PlanALite Price</th>
              <th>PlanALite Discount</th>
              <th>PlanC Price</th>
              <th>PlanC Discount</th>
              <th>PlanCLite Price</th>
              <th>PlanCLite Discount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayPricings.map((pricing, index) => (
              <tr key={pricing.id}>
                <td>{currentPage * itemsPerPage + index + 1}</td>
                <td>{pricing.service}</td>
                <td>{pricing.pricing.PlanA.price}</td>
                <td>{pricing.pricing.PlanA.discount}</td>
                <td>{pricing.pricing.PlanALite.price}</td>
                <td>{pricing.pricing.PlanALite.discount}</td>
                <td>{pricing.pricing.PlanC.price}</td>
                <td>{pricing.pricing.PlanC.discount}</td>
                <td>{pricing.pricing.PlanCLite.price}</td>
                <td>{pricing.pricing.PlanCLite.discount}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(pricing)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(pricing.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(pricings.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editing ? 'Edit Pricing' : 'Add Pricing'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Select Service</Form.Label>
                <Col sm={10}>
                  <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              {plans.map((plan) => (
                <div key={plan}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>{plan} Price</Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        name={`${plan}_price`}
                        value={pricingData[plan].price}
                        onChange={(e) => handleInputChange(e, plan, 'price')}
                        placeholder={`Enter price for ${plan} in AU$`}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>{plan} Discount</Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        name={`${plan}_discount`}
                        value={pricingData[plan].discount}
                        onChange={(e) => handleInputChange(e, plan, 'discount')}
                        placeholder={`Enter discount price for ${plan} in AU$`}
                      />
                    </Col>
                  </Form.Group>
                </div>
              ))}
              <Button type="submit" variant="primary">{editing ? 'Update Pricing' : 'Save Pricing'}</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default AdminPricings;
