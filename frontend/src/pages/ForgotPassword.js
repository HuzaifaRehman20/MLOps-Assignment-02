import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/forgot-password", { email });
      toast.success("Reset link sent to your email.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset link.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleForgot} className="auth-form">
        <h2 className="auth-title">Forgot Password</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
        <div className="auth-links">
          <Link to="/">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;