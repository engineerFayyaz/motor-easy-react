import React from 'react';
import { Carousel } from 'react-bootstrap';
import blog1 from '../../assets/images/blog_1.png';
import blog2 from '../../assets/images/blog_2.png';
import blog3 from '../../assets/images/blog_3.png';
import blog4 from '../../assets/images/blog_4.png';
import blog5 from '../../assets/images/blog_5.png';
import blog6 from '../../assets/images/blog_6.png';
import blog7 from '../../assets/images/blog_7.jpg';
import blog8 from '../../assets/images/blog_8.jpg';
import blog9 from '../../assets/images/blog_9.jpg';

const BlogSections = () => {
    const blogs = [
        { img: blog1, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog2, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog3, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog4, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog5, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog6, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog7, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog8, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' },
        { img: blog9, date: '20 May 2023', title: 'The meanings of life id to find your gift, The purpose of the life is to give', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum incidunt esse porro odit, velit molestiae ut.' }
    ];

    const renderCard = (blog, index) => (
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center" key={index}>
            <div className="card">
                <img src={blog.img} alt={`Blog ${index + 1}`} />
                <div className="card-body">
                    <button>{blog.date}</button>
                    <h3 className="card-title">{blog.title}</h3>
                    <p className="card-text">{blog.text}</p>
                    <a className="ms-2" href="javascript:void(0)"> Read More </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-5 mb-5">
                    <div className="text-center Great_customer">
                        <h5>BLOG & NEWS</h5>
                        <h3>See Latest Articles <span>insurance</span></h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="carouselExampleControlsNoTouchingLarges" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
                    <Carousel controls={true} indicators={false} interval={null}>
                        <Carousel.Item>
                            <div className="row blog_section d-flex justify-content-center g-0 d-flex m-0">
                                {blogs.slice(0, 3).map(renderCard)}
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row blog_section d-flex justify-content-center g-0 d-flex m-0">
                                {blogs.slice(3, 6).map(renderCard)}
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row blog_section d-flex justify-content-center g-0 d-flex m-0">
                                {blogs.slice(6, 9).map(renderCard)}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* For Mobile Screen */}
                <div id="carouselExampleControlsNoTouchingSmalls" className="carousel slide d-block d-lg-none" data-bs-ride="carousel">
                    <Carousel controls={true} indicators={false} interval={null}>
                        {blogs.map((blog, index) => (
                            <Carousel.Item key={index}>
                                <div className="row blog_section d-flex justify-content-center g-0 d-flex m-0">
                                    {renderCard(blog, index)}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default BlogSections;
