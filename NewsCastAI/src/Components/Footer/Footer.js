import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Developed by Saksham Gupta </div>
      <div className="contact">
        
        <a
          rel="noopener noreferrer"
          href="https://github.com/Saksham-Gupta-24"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/saksham-gupta24/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
