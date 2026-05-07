import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-background">
        <div className="circle circle-top"></div>
        <div className="circle circle-bottom"></div>
      </div>
      <div className="container position-relative z-1">
        <h2 className="contact-title text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="contact-form-container">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input type="text" className="form-control contact-input" placeholder="Enter your first name..." />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control contact-input" placeholder="Enter your last name..." />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control contact-input" placeholder="Enter your email address..." />
                </div>
                <div className="mb-4">
                  <textarea className="form-control contact-input" rows="6" placeholder="Enter your message..."></textarea>
                </div>
                <div className="text-end">
                  <button type="button" className="btn contact-submit-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
