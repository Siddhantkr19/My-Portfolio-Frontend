import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'service_ih8m3js';
    const TEMPLATE_ID = 'template_483641e';
    const PUBLIC_KEY = 'HCFWRZT9puK3K7UKy';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset(); // Clear form
          setTimeout(() => setStatus(''), 5000); // Reset status after 5s
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or want to discuss Java, Spring Boot, or System Design? 
        Drop me a message!
      </p>

      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <div className="form-group">
            <div className="input-icon"><FaUser /></div>
            <input type="text" name="user_name" placeholder="Your Name" required className="form-input" />
          </div>

          <div className="form-group">
            <div className="input-icon"><FaEnvelope /></div>
            <input type="email" name="user_email" placeholder="Your Email" required className="form-input" />
          </div>

          <div className="form-group">
            <div className="input-icon textarea-icon"><FaCommentDots /></div>
            <textarea name="message" placeholder="Your Message..." required className="form-input form-textarea"></textarea>
          </div>

          <button type="submit" className="btn btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
          </button>

          {status === 'success' && <p className="msg-success">✅ Message sent successfully!</p>}
          {status === 'error' && <p className="msg-error">❌ Failed to send. Please check your connection.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;