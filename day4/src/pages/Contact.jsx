import React, { useState } from 'react';
import '..//assets/css/Contact.css';
import Navbar from "../components/Navbar";
function Contact()
{
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [submitted, setSubmitted] = useState(false);
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log('Form submitted:', { name, email, message });
          setName('');
          setEmail('');
          setMessage('');
          setSubmitted(true);
        };
    return (
        <div className="ContactFull">
        <Navbar></Navbar>
        <div className="contact-us-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <p class="-p">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="-form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
        </div>
    );
}
export default Contact;


