import React from 'react';
import './Footer.css';
import logo from '../Images/Logo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 pe-lg-4">
            <div className="footer-logo mb-3">
              <img src={logo} alt="Kevalon Technology" style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
            <p className="footer-description">
              Kevalon Technology - Leading IT company in Ahmedabad, Gujarat, India.
              Expert website development, mobile app development (Flutter, React Native, Android, IOS), SEO services, and digital marketing solutions. Your Digital Growth Partner.
            </p>
            <p className="footer-services-list mt-3">
              Best IT Company in Ahmedabad | Web Development | Mobile App Development | CRM Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-heading">Our Expertise</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#web">Web Application Development</a></li>
              <li><a href="#mobile">Mobile Application Development</a></li>
              <li><a href="#game">Game Development</a></li>
              <li><a href="#ecommerce">E-Commerce Development</a></li>
              <li><a href="#internship">Internship & Training</a></li>
              <li><a href="#crm">CRM Development</a></li>
              <li><a href="#seo">SEO & Digital Marketing</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Get in Touch</h5>
            <div className="footer-contact-info">
              <div className="contact-item d-flex mb-3">
                <i className="bi bi-envelope me-3 fs-5"></i>
                <div>
                  <strong>Email</strong>
                  <p className="mb-0"><a href="mailto:career@kevalontechnology.in">career@kevalontechnology.in</a></p>
                  <p className="mb-0"><a href="mailto:ceo@kevalontechnology.in">ceo@kevalontechnology.in</a></p>
                </div>
              </div>
              <div className="contact-item d-flex mb-3">
                <i className="bi bi-telephone me-3 fs-5"></i>
                <div>
                  <strong>Phone</strong>
                  <p className="mb-0">+91 9081012218 / +91 9104012218</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-3">
                <i className="bi bi-geo-alt me-3 fs-5"></i>
                <div>
                  <strong>Office</strong>
                  <p className="mb-0">204, 2nd Floor, Yash Aqua</p>
                  <p className="mb-0">Vijay Cross Road, Navrangpura</p>
                  <p className="mb-0">Ahmedabad, Gujarat - 380009</p>
                </div>
              </div>
            </div>
            
            <div className="footer-social-icons mt-4">
              <a href="#linkedin" className="social-icon"><i className="bi bi-linkedin"></i></a>
              <a href="#twitter" className="social-icon"><i className="bi bi-twitter-x"></i></a>
              <a href="#instagram" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#whatsapp" className="social-icon"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom text-center mt-5">
          <p className="mb-0">&copy; 2026 Kevalon Technology &mdash; All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
