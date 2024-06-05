import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import services1 from '../../assets/images/services1.png';
import services2 from '../../assets/images/services2.png';
import services3 from '../../assets/images/services3.png';
import services4 from '../../assets/images/services4.png';

const carouselItems = [
  [
    {
      imgSrc: services1,
      iconClass: 'fa-car',
      title: 'Used Car Warranty',
      text: 'Extended protection plans for pre-owned vehicles, ensuring peace',
    },
    {
      imgSrc: services2,
      iconClass: 'fa-truck',
      title: 'Vehicle Inspection',
      text: 'Thorough examination to assess the condition and safety of a vehicle.',
    },
    {
      imgSrc: services3,
      iconClass: 'fa-taxi',
      title: 'Vehicle Service',
      text: 'Routine maintenance and repairs to keep vehicles running smoothly',
    },
    {
      imgSrc: services4,
      iconClass: 'fa-road',
      title: 'Roadside Assistance',
      text: 'Assistance for vehicles experiencing breakdowns or other roadside issues.',
    },
  ],
  [
    {
      imgSrc: services1,
      iconClass: 'fa-wind',
      title: 'Windscreen Repair',
      text: 'Replacing old or faulty batteries in vehicles to ensure reliability.',
    },
    {
      imgSrc: services2,
      iconClass: 'fa-car-battery',
      title: 'Battery Replacement',
      text: 'Fixing chips or cracks in windshields to maintain visibility and safety',
    },
    {
      imgSrc: services1,
      iconClass: 'fa-car',
      title: 'Used Car Warranty',
      text: 'Extended protection plans for pre-owned vehicles, ensuring peace',
    },
    {
      imgSrc: services2,
      iconClass: 'fa-truck',
      title: 'Vehicle Inspection',
      text: 'Thorough examination to assess the condition and safety of a vehicle.',
    },
  ],
  [
    {
      imgSrc: services1,
      iconClass: 'fa-taxi',
      title: 'Windscreen Repair',
      text: 'Replacing old or faulty batteries in vehicles to ensure reliability.',
    },
    {
      imgSrc: services2,
      iconClass: 'fa-car-battery',
      title: 'Battery Replacement',
      text: 'Fixing chips or cracks in windshields to maintain visibility and safety',
    },
    {
      imgSrc: services2,
      iconClass: 'fa-taxi',
      title: 'Vehicle Inspection',
      text: 'Thorough examination to assess the condition and safety of a vehicle.',
    },
    {
      imgSrc: services3,
      iconClass: 'fa-truck',
      title: 'Vehicle Service',
      text: 'Routine maintenance and repairs to keep vehicles running smoothly',
    },
  ],
];

function ServicesCarousel() {
  return (
    <div className="row">
      <Carousel id="carouselExampleRideforlargescreen" className="d-none d-lg-block">
        {carouselItems.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row font_set">
              {group.map((item, index) => (
                <div className="col-lg-3" key={index}>
                  <Card>
                    <Card.Img variant="top" src={item.imgSrc} alt="..." />
                    <Card.Body>
                      <i className={`fa-solid ${item.iconClass}`} />
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      <Button variant="link">Read more</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel id="carouselExampleRideforsmallscreen" className="d-block d-lg-none">
        {carouselItems.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row font_set">
              {group.map((item, index) => (
                <div className="col-12" key={index}>
                  <Card>
                    <Card.Img variant="top" src={item.imgSrc} alt="..." />
                    <Card.Body>
                      <i className={`fa-solid ${item.iconClass}`} />
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      <Button variant="link">Read more</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ServicesCarousel;
