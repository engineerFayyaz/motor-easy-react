import React, { useState, useEffect } from "react";
import { db, storage } from "../../../firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "../../../Components/TopHeader";
import MainHeader from "../../../Components/MainHeader";
import Footer from "../../../Components/Footer";

const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
    fetchPosts();
        
    } catch (error) {
        
    } finally{
        setLoading(false);
    }
  }, []);

  const fetchPosts = async () => {
    const postsCollection = collection(db, "blogs");
    const snapshot = await getDocs(postsCollection);
    const postsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleEdit = async (postId) => {
    setCurrentPostId(postId);
    const postToEdit = posts.find((post) => post.id === postId);
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  };

  const handleDelete = async (postId, imageUrl) => {
    setLoading(true);
    try {
      const postRef = doc(db, 'blogs', postId);
      
      // Check if the document exists before attempting to delete
      const postDoc = await getDocs(postRef);
      if (!postDoc.exists()) {
        throw new Error('Document does not exist');
      }
  
      await deleteDoc(postRef);
  
      // Delete image from storage if exists
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteDoc(imageRef);
      }
  
      toast.success('Blog post deleted successfully!');
      fetchPosts(); // Refresh posts after deletion
    } catch (error) {
      console.error("Error deleting post: ", error);
      toast.error("Failed to delete post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    try {
      if (image) {
        const imageRef = ref(storage, `blog_images/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image);

        await uploadTask
          .then(async () => {
            imageUrl = await getDownloadURL(imageRef);
            toast.success("Image uploaded successfully");
          })
          .catch((error) => {
            console.error("Error uploading image: ", error);
            toast.error("Error uploading image: ", error);
          });
      }

      if (currentPostId) {
        const postRef = doc(db, "blogs", currentPostId);
        await updateDoc(postRef, {
          title,
          content,
          imageUrl: imageUrl || image ? imageUrl : undefined,
        });

        toast.success("Blog post updated successfully!");
        setCurrentPostId(null);
      } else {
        await addDoc(collection(db, "blogs"), {
          title,
          content,
          imageUrl,
          createdAt: serverTimestamp(),
        });

        toast.success("Blog post added successfully!");
      }

      setTitle("");
      setContent("");
      setImage(null);
      fetchPosts(); // Refresh posts after adding/updating
    } catch (error) {
      console.error("Error adding/updating blog post: ", error);
      toast.error("Error adding/updating blog post: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Utility function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  // Utility function to strip HTML tags from text
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <ToastContainer />
      <TopHeader />
      <MainHeader />
      <main>
      <div className="container mt-5 ">
        <h2 className="mb-4 text-center">Add Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={AddPost.modules}
              formats={AddPost.formats}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} >
            {loading ? "Adding..." : "Add Post"}
          </button>
        </form>
      </div>
      <div className="container p-3">
      <h2 className="mb-4 text-center">Manage Blogs Posts Here</h2>

        <div className="row">
            <div className="col-md-12">
            <table className="table">
        <thead>
          <tr className="text-center">
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {loading ? (
                <tr className="text-center">
                <td  colSpan={7} >
                Loading...

                </td>
                </tr>
            ) : (
                posts.map((post) => (
                    <tr key={post.id} className="text-center">
                      <td>{post.title}</td>
                      <td>{truncateText(stripHtmlTags(post.content), 80)}</td>
                      <td className="d-flex gap-1">
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(post.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(post.id, post.imageUrl)}
                          disabled= {loading}
                        >
                          {loading ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                
            )}
         
        </tbody>
      </table>
            </div>
        </div>
      </div>
      </main>
    <Footer />
    
    </>
  );
};

AddPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

AddPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

export default AddPost;
