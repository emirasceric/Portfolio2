import React, {useEffect, useState } from 'react';
import "./Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({name: '', email: ''});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const form = document.querySelector('.contact-form');
      if (form) {
        const rect = form.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && rect.left <= window.innerWidth * 0.5) {
          setShowForm(true);
        } else {
          setShowForm(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

  const validateForm = () => {
    let isValid = true;
    let errors = {name: '', email: ''};

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!email.includes('@')) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("You've received a new mail");
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form className={`contact-form ${showForm ? 'show' : ''}`} onSubmit={handleSubmit}>
      <section id="contacts-section"></section>
      <div>
        <h2 className='naslovContact'>Contact</h2>
        <label className='naslovIme' htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="  What is your name?"
        />
        {error.name && <div style={{color: 'red'}}>{error.name}</div>}
      </div>
      <div>
        <label className='naslovEmail'htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="  What's your email?"
        />
        {error.email && <div style={{color: 'red'}}>{error.email}</div>}
      </div>
      <div>
        <label className='naslovMessage'htmlFor="message">Your Message</label>
        <textarea
          id="message"
          value={message}         
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please enter your message"
        ></textarea>
      </div>
      <button className="dugme" type="submit">Send</button>
      <div className="fixed">
      <p>
            "The only way to do great work is to love what you do." <br/> Steve Jobs
            </p>
           <div className="image-container">
             <a href="mailto:asceric_emir@hotmail.com" target="_blank" rel="noopener noreferrer" className="image-link">
               <img src="https://i.ibb.co/6bmDVw1/mail2.png" alt="Email" />
             </a>
             <a href="https://www.linkedin.com/in/emir-asceric/" target="_blank" rel="noopener noreferrer" className="image-link">
               <img src="https://i.ibb.co/RbZ6TVK/Linked-In-icon-circle-svg.png" alt="LinkedIn" />
             </a>
             <a href="https://github.com/emirasceric" target="_blank" rel="noopener noreferrer" className="image-link">
               <img src="https://i.ibb.co/kJ530sN/github-11-xxl.png" alt="GitHub" />
             </a>
           </div>
         </div>

    </form>
  );
}

export default Contact;
