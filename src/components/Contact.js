import React from "react";

import "./Contact.css";


const Contact = () => {
  return (
    <section id="contacts-section">
      <div className="parallax-wrapper">
        <div className="section">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;