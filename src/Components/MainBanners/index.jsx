import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

function MainBanners({ bannerUrls }) {
    return (
        <div className="row">
            <Carousel
                variant="dark"
                interval={10000}
                nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>}
                prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}
            >
                {bannerUrls.map((url, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={url}
                            className="d-block w-100"
                            alt={`Slide ${index + 1}`}
                        />
                        <Carousel.Caption className="d-none d-md-block">
                            <h6>Motoreasy services</h6>
                            <p>Everything Car Done <br /> for you</p>
                            <div>
                                <a href="/About-us"><Button variant="primary" className="read_more">Read More</Button></a>
                                <a href="/Contact-us"><Button variant="primary" className="get_a_quote">Get a Quote</Button></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

MainBanners.defaultProps = {
    bannerUrls: [],
};

export default MainBanners;
