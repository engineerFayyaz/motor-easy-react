import { useState } from "react";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Check if the user is an admin
      const isAdmin = checkAdminCredentials(email, password);

      if (isAdmin) {
        toast.success("Welcome back, Admin!");
        setTimeout(() => {
          navigate("/admin/Dashboard"); // Redirect to admin dashboard
        }, 1000);
      } else {
        toast.success("Welcome back!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log("Invalid credentials ", error.message);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to check admin credentials
  const checkAdminCredentials = (email, password) => {
    // Replace with your admin credentials check
    const adminEmail = "adminmotoreasy@gmail.com";
    const adminPassword = "admin123";

    return email === adminEmail && password === adminPassword;
  };

  return (
    <>
      <main>
        <ToastContainer />
        <div className="signin">
          <div className="signin_logo">
            <a href="/">
              Motor Easy
            </a>
          </div>
          <div className="wrapper">
            <form action="#" onSubmit={formSubmit}>
              <h2>Sign In</h2>
              <div className="input-field">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Enter your Email</label>
              </div>
              <p
                id="email"
                className="text-danger text-start"
                style={{ fontSize: "12px", display: "none" }}
              ></p>
              <div className="input-field">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Enter your Password</label>
              </div>
              <p
                id="password"
                className="text-danger text-start"
                style={{ fontSize: "12px", display: "none" }}
              ></p>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>Remember me</p>
                </label>
                <a href="#" className="text-primary">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="mt-4">
                {loading ? "Signing...." : "Sign In"}
              </button>
              <div className="register">
                <p>
                  Don't have an account?
                  <a href="/Sign_up">
                    <b>Sign Up</b>
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
