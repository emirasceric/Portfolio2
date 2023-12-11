import React from "react";

import "./Contact.css";


const Contact = () => {
  return (
    <section id="contacts-section">
      <div className="parallax-wrapper">
        <div className="section">
          <div className="fixed">
            <p>
              "Creativity involves breaking out of established patterns in order
              to look at things in a different way." - Edward de Bono
            </p>
            <div className="image-container">
              <a href="mailto:asceric_emir@hotmail.com" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="https://i.ibb.co/HTWTMnD/Pngtree-vector-email-icon-3783212.png" alt="Email" />
              </a>
              <a href="https://www.linkedin.com/in/emir-asceric/" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="https://www.treasurers.org/ACTmedia/linkedin-icon-1-logo-png-transparent.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/emirasceric" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="https://i.ibb.co/Q83pCKf/github-logo-1.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
