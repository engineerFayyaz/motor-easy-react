import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BrandsPartners = () => {
  const [index, setIndex] = useState(0);

  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const totalSlides = Math.ceil(brands.length / 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrevSlide = () => {
    setIndex(index === 0 ? totalSlides - 1 : index - 1);
  };

  const handleNextSlide = () => {
    setIndex(index === totalSlides - 1 ? 0 : index + 1);
  };

  const renderBrandItems = () => {
    const brandItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIdx = i * 6;
      const endIdx = startIdx + 6;
      brandItems.push(
        <Carousel.Item key={i}>
          <div className="d-flex justify-content-center">
            {brands.slice(startIdx, endIdx).map((brand, idx) => (
              <img key={idx} className="set_width_carousel" src={brand} alt={`Brand ${startIdx + idx + 1}`} />
            ))}
          </div>
        </Carousel.Item>
      );
    }
    return brandItems;
  };

  return (
    <div className="container">
      <div className="position-relative mt-5">
        <Carousel fade indicators={false} activeIndex={index} interval={null}>
          {renderBrandItems()}
        </Carousel>
        {/* <FaChevronLeft className="carousel-nav left" onClick={handlePrevSlide} />
        <FaChevronRight className="carousel-nav right" onClick={handleNextSlide} /> */}
      </div>
    </div>
  );
};

export default BrandsPartners;
