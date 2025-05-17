import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import image from "./contact.png";

const Rajcontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_4sos34k",
        "template_7pkwh9e",
        templateParams,
        "b_4YEO3ffPdrqzuB4"
      )
      .then(
        () => {
          alert(`Thank you, ${formData.name}! Your message has been sent.`);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={image} alt="3D Contact Visual" />
        </div>

        <div className="contact-content">
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <a href="mailto:raj76458kumar@gmail.com">Raj76458kumar@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <a href="tel:+917645848488">+91 7645848488</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Gmail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Rajcontact;
