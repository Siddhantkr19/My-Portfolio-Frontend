import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('Sending...');

    try {
      const response = await fetch('https://my-portfolio-backend-app-1-0-0.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
   
      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setResponseMessage('Error: Could not send message. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setResponseMessage('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default Contact;