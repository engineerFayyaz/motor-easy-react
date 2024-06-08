import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BlogsContainer = () => {
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

    const extractTextFromHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <div className="container main-blogs-section mt-5">
            <div className="row d-flex">
                <div className="leftcolumn col-lg-8">
                    <section className="light">
                        <div className="container py-2">
                            {blogsData ? (
                                blogsData.map((data) => (
                                    <article className="postcard light blue" id="blog1" key={data.id}>
                                        <Link className="postcard__img_link" to={`/blogs/${data.id}`}>
                                            {data.imageUrl && (
                                                <img src={data.imageUrl} alt={data.title} className="postcard__img" />
                                            )}
                                        </Link>
                                        <div className="postcard__text t-dark">
                                            <h1 className="postcard__title blue">
                                                <Link to={`/blogs/${data.id}`}>
                                                    {data.title}
                                                </Link>
                                            </h1>
                                            <div className="postcard__subtitle small">
                                                <time dateTime={new Date(data.createdAt.seconds * 1000).toISOString()}>
                                                    <i className="fas fa-calendar-alt mr-2" />
                                                    {new Date(data.createdAt.seconds * 1000).toLocaleDateString()}
                                                </time>
                                            </div>
                                            <div className="postcard__bar" />
                                            <div className="postcard__preview-txt">
                                                {extractTextFromHtml(data.content)}
                                            </div>
                                            <ul className="postcard__tagbox">
                                                <li className="tag__item play blue">
                                                    <Link to={`/blogs/${data.id}`}>Read more..</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </section>
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
                        <h3>Popular Post</h3>
                        <ul className="latest-posts list-group">
                            <li className="post list-group-item">
                                <a href="#blog2">
                                    Is It Safe to Continue Driving with the Check Engine Light On?
                                </a>
                            </li>
                            <li className="post list-group-item">
                                <a href="#blog3">
                                    How Do I Know if My Car Battery is Dead or Just Discharged?
                                </a>
                            </li>
                            <li className="post list-group-item">
                                <a href="#blog4">
                                    How to Determine If Your Car Brakes Need Repair or Replacement
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Categories</h3>
                        <ul className="categories list-group">
                            <li className="post list-group-item">
                                <a href="#blog2">
                                    Is It Safe to Continue Driving with the Check Engine Light On?
                                </a>
                            </li>
                            <li className="post list-group-item">
                                <a href="#blog3">
                                    How Do I Know if My Car Battery is Dead or Just Discharged?
                                </a>
                            </li>
                            <li className="post list-group-item">
                                <a href="#blog4">
                                    How to Determine If Your Car Brakes Need Repair or Replacement
                                </a>
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
    );
};
