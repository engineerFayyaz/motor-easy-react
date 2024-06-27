import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { storage, db } from '../../../firebase';
import { Form, Button, ProgressBar, Container, Row, Col, Table } from 'react-bootstrap';
import { collection, addDoc, deleteDoc, doc,query,where,getDocs} from 'firebase/firestore';
import AdminHeader from '../../../Components/AdminHeader';
import Footer from '../../../Components/Footer';

const AdminBanners = () => {
  const services = [
    'Used Car warranty',
    'Vehicle inspection',
    'Vehicle Service',
    'Road Side',
    'Battery Replacement',
    'Windscreen Repair',
    'Home'
  ];

  const [selectedService, setSelectedService] = useState('Used Car warranty');
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchImages();
  }, [selectedService]);

  const fetchImages = async () => {
    setLoading(true);
    setError('');
    try {
      const allImages = [];
      for (const service of services) {
        const folderRef = ref(storage, `${service}/`);
        const result = await listAll(folderRef);
        const urls = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { name: itemRef.name, url, service };
          })
        );
        allImages.push(...urls);
      }
      setImageList(allImages);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleUpload = () => {
    if (!images.length) return;

    images.forEach((image) => {
      const storageRef = ref(storage, `${selectedService}/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prev) => ({
            ...prev,
            [image.name]: progress,
          }));
        },
        (error) => {
          console.error('Upload error:', error);
          setError('Failed to upload image');
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            await addDoc(collection(db, 'images'), {
              url: downloadURL,
              name: image.name,
              service: selectedService,
            });
            fetchImages(); // Refresh the image list
          } catch (error) {
            console.error('Error adding document: ', error);
            setError('Failed to save image metadata');
          }
        }
      );
    });
  };

  const handleDelete = async (name, service) => {
    const storageRef = ref(storage, `${service}/${name}`);
    try {
      await deleteObject(storageRef);
      const q = query(collection(db, 'images'), where('service', '==', service), where('name', '==', name));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      fetchImages(); // Refresh the image list
    } catch (error) {
      console.error('Error deleting image:', error);
      setError('Failed to delete image');
    }
  };

  const handleDownload = (url, name) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4">Upload Banners</h1>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Select Service</Form.Label>
            <Col sm={10}>
              <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
                {/* <option value="All Services">All Services</option> */}
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Upload Images</Form.Label>
            <Col sm={10}>
              <Form.Control type="file" multiple onChange={handleImageChange} />
            </Col>
          </Form.Group>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Form>
        {images.length > 0 && (
          <div className="mt-4">
            <h4>Upload Progress</h4>
            {images.map((image) => (
              <div key={image.name} className="my-2">
                <span>{image.name}</span>
                <ProgressBar now={uploadProgress[image.name] || 0} label={`${Math.round(uploadProgress[image.name] || 0)}%`} />
              </div>
            ))}
          </div>
        )}
        <h2 className="my-4">Uploaded Images</h2>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>{error}</p> : null}
        {!loading && !error && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {imageList.map((image, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={image.url} alt={image.name} width="100" />
                    <div>{image.name}</div>
                  </td>
                  <td>{image.service}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(image.name, image.service)}>Delete</Button>
                    <Button variant="secondary" onClick={() => handleDownload(image.url, image.name)}>Download</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default AdminBanners;
