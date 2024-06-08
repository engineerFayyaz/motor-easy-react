import "./Auth.css";
import { db, auth } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    try {

    
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const formData = {
        name,
        email,
      };

      const userData = await addDoc(collection(db, "Users"), formData);

      setName("")
      setEmail("")
      setPassword("")

      toast.success("Welcome to Motor Easy- ",);

      setTimeout(() => {
        navigate("/sign_in")
      }, 1000)
      console.log("User data stored in database", userData);
    } catch (error) {
      toast.error("try again to continue  ", error.message);
      console.log("error while uploading ", error.message);

    }
  };
  return (
    <>
    <ToastContainer />
      <main>
        <div className="signin">
          <div className="signin_logo">
            <a href="/">Motor Easy</a>
          </div>
          <div className="wrapper">
            <form  onSubmit={handleSignup} >
              <h2>Create an Account</h2>
              <div className="input-field">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>Enter your Name</label>
              </div>
              <div className="input-field">
                <input type="email" required  value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Enter your Email</label>
              </div>
              <div className="input-field">
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Enter your Password</label>
              </div>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>I agree with terms and conditions</p>
                </label>
              </div>
              <button className="mt-4" type="submit">
                Sign Up
              </button>
              <div className="register">
                <p>
                  already have an account?
                  <a href="/Sign_in">
                    <b>Sign In</b>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
