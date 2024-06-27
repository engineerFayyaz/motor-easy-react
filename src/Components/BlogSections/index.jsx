import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogSections = () => {
    const [blogsData, setBlogsData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const blogsCollectionRef = collection(db, 'blogs');
                const querySnapshot = await getDocs(blogsCollectionRef);
                const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBlogsData(blogs);
            } catch (error) {
                console.error("Error fetching blog data: ", error);
            }
        };

        fetchBlogData();
    }, []);

    const renderCard = (blog, index) => (
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center" key={index}>
            <div className="card">
                <img src={blog.imageUrl} alt={`Blog ${index + 1}`} />
                <div className="card-body">
                    <button>{blog.date}</button>
                    <h3 className="card-title">{blog.title}</h3>
                    <div className="links d-flex justify-content-between px-2">
                        <Link className="ms-2" style={{ backgroundColor: "#1bb7ff", padding: "10px", color: "white", textDecoration: "none" }} to={`/blogs/${blog.id}`}> Read More </Link>
                        <Link to={"/getQuotes"} style={{ backgroundColor: "#1bb7ff", padding: "10px", color: "white", textDecoration: "none" }} className='text-end' >get Quote</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    // Function to chunk the blogsData array into groups of 3
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    if (!blogsData) {
        return <div>Loading...</div>;
    }

    const chunkedBlogs = chunkArray(blogsData, 3);

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
                        {chunkedBlogs.map((chunk, index) => (
                            <Carousel.Item key={index}>
                                <div className="row blog_section d-flex justify-content-center g-0 d-flex m-0">
                                    {chunk.map(renderCard)}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                {/* For Mobile Screen */}
                <div id="carouselExampleControlsNoTouchingSmalls" className="carousel slide d-block d-lg-none" data-bs-ride="carousel">
                    <Carousel controls={true} indicators={false} interval={null}>
                        {blogsData.map((blog, index) => (
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
