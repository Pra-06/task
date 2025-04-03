import React, { useState } from "react";
import "./../styles/ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <img src="img.png" alt="Profile" />
          <div>
            <p>Hello, Welcome 🎉</p>
            <p><strong>John Weak</strong></p>
          </div>
        </div>

        <div className="contact-content">
          <h2 className="contact-title">Contact us</h2>

          <div className="contact-info">
            <span>📧</span>
            <div>
              <p><strong>Email</strong></p>
              <p>workforeign@gmail.com</p>
            </div>
          </div>

          <div className="contact-info">
            <span>📞</span>
            <div>
              <p><strong>Phone No.</strong></p>
              <p>+44 (0) XXXX XXX XXX</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
              className="input-field" 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              required
            />

            <label>Email</label>
            <input 
              className="input-field" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required
            />

            <label>Message</label>
            <textarea 
              className="textarea-field" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Enter your query..."
              required
            ></textarea>

            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
