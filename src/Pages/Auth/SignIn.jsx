import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    const invalidEmail = document.getElementById('email');
    const invalidPassword = document.getElementById('password');

    e.preventDefault();
    if (email === "") {
        invalidEmail.style.display = "block";
      invalidEmail.innerHTML = "Please enter a valid email *";

    if (password === "") {
        invalidPassword.style.display = "block";
        invalidPassword.innerHTML = "Please enter a valid password *";
    }
    } 
    else{
        navigate("/");
    }
  };
  return (
    <>
      <main>
        <div className="signin">
          <div className="signin_logo">
            <a href="/">
              {/* <img src="/assets/images/" width="100" alt=""> */}
              Motor Easy
            </a>
          </div>
          <div className="wrapper">
            <form action="#" onSubmit={formSubmit}>
              <h2>Sign In</h2>
              <div className="input-field">
                <input type="email" required="" value={email} onChange={(e) => setEmail(e.target.value) } />
                <label>Enter your Email</label>
              </div>
                <p id="email" className="text-danger text-start" style={{fontSize:"12px", display:"none"}}></p>
              <div className="input-field">
                <input type="password" required="" />
                <label>Enter your Password</label>
              </div>
                <p id="password" className="text-danger text-start" style={{fontSize:"12px", display:"none"}}></p>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" value={password} onChange={(e) => setPassword(e.target.value) } />
                  <p>Remember me</p>
                </label>
                <a href="#" className="text-primary">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="mt-4">
                Sign In
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
