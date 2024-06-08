import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import Footer from '../../Components/Footer';
import MainHeader from '../../Components/MainHeader';
import TopHeader from '../../Components/TopHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BlogsDetail = () => {
    const { id } = useParams(); // Get the blog ID from route parameters
    const [blogData, setBlogData] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Fetch the blog data by ID
        const fetchBlogData = async () => {
            try {
                const blogDocRef = doc(db, 'blogs', id);
                const blogDoc = await getDoc(blogDocRef);
                if (blogDoc.exists()) {
                    setBlogData({ id: blogDoc.id, ...blogDoc.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching blog data: ", error);
            }
        };

        // Fetch the latest blog titles for the sidebar
        const fetchLatestBlogs = async () => {
            try {
                const blogsCollectionRef = collection(db, 'blogs');
                const querySnapshot = await getDocs(blogsCollectionRef);
                const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, title: doc.data().title }));
                setLatestBlogs(blogs);
            } catch (error) {
                console.error("Error fetching latest blog titles: ", error);
            }
        };

        fetchBlogData();
        fetchLatestBlogs();
    }, [id]);

    if (!blogData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <TopHeader />
            <MainHeader />
            <main>
                <section>
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-lg-12 about_us_bg_image d-flex justify-content-center align-items-center flex-column">
                                <h5>Blogs- Motor Easy</h5>
                                <p>You Here! &gt; Home &gt; Blogs</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container main-blogs-section mt-5">
                    <div className="row d-flex">
                        <div className="leftcolumn col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    {blogData.imageUrl && (
                                        <img
                                            src={blogData.imageUrl}
                                            width="100%"
                                            style={{ height: 400, objectFit: "fill" }}
                                            className="img-fluid mb-4"
                                            alt={blogData.title}
                                        />
                                    )}
                                    <h2 className="card-title">
                                        <strong>{blogData.title}</strong>
                                    </h2>
                                    <p className="card-text">Published on {new Date(blogData.createdAt.seconds * 1000).toLocaleDateString()}</p>
                                    <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="rightcolumn col-lg-4 p-4">
                            <div className="card search-bar">
                                <h3 className="search-bar-title">Search Here</h3>
                                <input
                                    type="text"
                                    placeholder="Search.."
                                    className="search-bar-input form-control"
                                />
                            </div>
                            <div className="card">
                                <h3>Latest Posts</h3>
                                <ul className="latest-posts list-group">
                                    {latestBlogs.map(blog => (
                                        <li className="post list-group-item" key={blog.id}>
                                            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Categories</h3>
                                <ul className="categories list-group">
                                    <li className="post list-group-item">
                                        <a href="#">Is It Safe to Continue Driving with the Check Engine Light On?</a>
                                    </li>
                                    <li className="post list-group-item">
                                        <a href="#">How Do I Know if My Car Battery is Dead or Just Discharged?</a>
                                    </li>
                                    <li className="post list-group-item">
                                        <a href="#">How to Determine If Your Car Brakes Need Repair or Replacement</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Recent Comments</h3>
                                <ul className="recent-comments list-group">
                                    <li className="post list-group-item">Love to know.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
