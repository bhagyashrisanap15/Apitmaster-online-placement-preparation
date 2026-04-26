import { useState } from "react";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  
  return (
    <div className="wrapper">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">
          <h2 className="heading-container">Login</h2>
          <p>Enter to improve your sleep and bring peace to your life</p>

          {/* Google */}
          <a
            href="https://accounts.google.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="icon"
            />
            Sign in with Google
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="icon"
            />
            Sign in with Facebook
          </a>
          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div className="divider">or</div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>


           
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="right-text">
            <h2>Welcome Back!</h2>
            <p>Don't have an account? <a href="/signup">Sign up</a> now.</p>
          </div>
        </div>

      </div>
    </div>
  );
}