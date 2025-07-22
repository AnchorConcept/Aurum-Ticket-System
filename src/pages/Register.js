import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await register(email, password);
      const user = userCredential.user;

      // Save user info with role to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        role,
      });

      navigate("/");
    } catch (err) {
      setError("Failed to create account. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Create Account</h2>
        {error && <div className="error-box">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="support">Support</option>
            </select>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
