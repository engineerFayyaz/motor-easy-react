import React from "react";
import { Carousel, Button } from "react-bootstrap";
import slider2 from "../../assets/images/slider2.jpg";
import sliders from "../../assets/images/slider_1.jpg";
import Sliders3 from "../../assets/images/slider_3.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

function MainBanners() {
    return (
        <div className="row">
            <Carousel variant="dark" interval={10000} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}>
                <Carousel.Item>
                    <img
                        src={slider2}
                        className="d-block w-100"
                        alt="Slide 1"
                    />
                    <Carousel.Caption className="d-none d-md-block">
                        <h6>Motoreasy services</h6>
                        <p>Drive With Peace of Mind Service $ Warranty</p>
                        <div>
                            <a href="/About-us"><Button variant="primary" className="read_more">Read More</Button></a>
                            <a href="/Contact-us"><Button variant="primary" className="get_a_quote">Get a Quote</Button></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={sliders}
                        className="d-block w-100"
                        alt="Slide 2"
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
                <Carousel.Item>
                    <img
                        src={Sliders3}
                        className="d-block w-100"
                        alt="Slide 3"
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
            </Carousel>
        </div>
    );
}

export default MainBanners;
