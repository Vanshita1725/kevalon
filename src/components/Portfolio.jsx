import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Web', 'Mobile', 'Game'];

  // Dummy array to render 8 placeholder cards
  const portfolioItems = [...Array(8)];

  return (
    <section className="portfolio-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="portfolio-title fw-bolder">Our Portfolio - Web & Mobile Projects</h2>
          <p className="portfolio-subtitle text-dark mt-3 mb-5">
            Transforming ideas into digital products | Kevalon Technology
          </p>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          {tabs.map((tab, idx) => (
            <Button 
              key={idx}
              variant="custom"
              className={`portfolio-tab-btn rounded-pill px-4 py-2 fw-semibold ${activeTab === tab ? 'active-tab' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {portfolioItems.map((_, idx) => (
            <Col lg={4} md={6} sm={12} key={idx}>
              <div className="portfolio-card rounded-4 shadow-sm">
                {/* Image Placeholder */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
