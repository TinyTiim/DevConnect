import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';



const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-title">Collaborators</h3>
      <div className="footer-row">
        <div className="footer-card">
          <p className="footer-text">Sophia Palomo</p>
          <a
            href="https://www.linkedin.com/in/%E2%81%A2sophia-palomo-565155271/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TinyTiim"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
        </div>
        <div className="footer-card">
          <p className="footer-text">Alexia Valenzuela</p>
          <a
            href="https://www.linkedin.com/in/alexia-valenzuela-aa54b4236//"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alexiaValen"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
        </div>
        <div className="footer-card">
          <p className="footer-text">name</p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
        </div>
        <div className="footer-card">
          <p className="footer-text">Blake Stevens</p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DreadSlack"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

