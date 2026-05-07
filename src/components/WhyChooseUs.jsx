import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section py-5 position-relative">
      {/* Background glow circles */}
      <div className="bg-glow circle-1"></div>
      <div className="bg-glow circle-2"></div>
      <div className="bg-glow circle-3"></div>

      <Container className="position-relative z-index-1">
        <div className="text-center mb-4 pt-3">
          <div className="d-inline-flex align-items-center bg-light rounded-pill px-4 py-2 mb-3 badge-custom">
            <span className="dot-indicator me-2"></span>
            <span className="fw-semibold text-dark badge-text">A partner committed to your success</span>
          </div>
          <h2 className="why-title fw-bolder">Why Choose Kevalon Technology</h2>
          <p className="why-subtitle text-dark fw-medium mt-3">
            Trusted IT partner for startups and enterprises across Ahmedabad, Gujarat, and India.
          </p>
        </div>

        <div className="main-content-box p-4 p-md-5 mx-auto">
          <h3 className="box-title fw-bold mb-3">Driving Digital Success</h3>
          <p className="box-desc mb-4">
            Kevalon Technology is a trusted IT company in Ahmedabad, delivering reliable and result-driven digital solutions for businesses of all sizes. With expertise in website development, mobile app development, custom software, and SEO services, we build scalable, secure, and high-performance solutions tailored to your business needs.
          </p>
          
          <h6 className="stats-heading fw-bold mb-3">Our Latest Stats</h6>
          
          <Row className="g-3 mb-4">
            <Col lg={3} md={6} sm={12}>
              <div className="stat-item d-flex align-items-center p-3 rounded-3 shadow-sm">
                <i className="bi bi-calendar3 stat-icon me-3"></i>
                <div>
                  <h6 className="stat-title fw-bold mb-1">Years in Business</h6>
                  <p className="stat-desc mb-0"><span className="fw-bold">2+</span> Trusted experience</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="stat-item d-flex align-items-center p-3 rounded-3 shadow-sm">
                <i className="bi bi-people-fill stat-icon me-3"></i>
                <div>
                  <h6 className="stat-title fw-bold mb-1">Dedicated Experts</h6>
                  <p className="stat-desc mb-0"><span className="fw-bold">20+</span> Skilled professionals</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="stat-item d-flex align-items-center p-3 rounded-3 shadow-sm">
                <i className="bi bi-file-earmark-text stat-icon me-3"></i>
                <div>
                  <h6 className="stat-title fw-bold mb-1">Projects Delivered</h6>
                  <p className="stat-desc mb-0"><span className="fw-bold">15+</span> Across industries</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="stat-item d-flex align-items-center p-3 rounded-3 shadow-sm">
                <i className="bi bi-globe2 stat-icon me-3"></i>
                <div>
                  <h6 className="stat-title fw-bold mb-1">Global Clients</h6>
                  <p className="stat-desc mb-0"><span className="fw-bold">5+</span> Long-term partnerships</p>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center box-footer-text mt-5 pt-2">
            <p className="mb-2">Driven by innovation and quality, our team combines technical excellence with a customer-first approach to ensure long-term success.</p>
            <p className="mb-0">We don't just build software — we create scalable digital growth.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
