import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Web', 'Mobile', 'Game'];

  const portfolioItems = [
    { id: 1, title: 'Corporate Website', category: 'Web' },
    { id: 2, title: 'E-commerce Platform', category: 'Web' },
    { id: 3, title: 'Mobile Banking App', category: 'Mobile' },
    { id: 4, title: 'Food Delivery App', category: 'Mobile' },
    { id: 5, title: '2D Puzzle Game', category: 'Game' },
    { id: 6, title: 'AR Adventure Game', category: 'Game' },
    { id: 7, title: 'Portfolio Landing Page', category: 'Web' },
    { id: 8, title: 'Fitness Tracker App', category: 'Mobile' },
  ];

  const filteredItems = activeTab === 'All Projects'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section className="portfolio-section py-5">
      <Container>
        <div className="text-center ">
          <h2 className="portfolio-title fw-bolder">Our Portfolio - Web & Mobile Projects</h2>
          <p className="portfolio-subtitle text-dark mt-3 mb-3">
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

        <Row className="g-4 ">
          {filteredItems.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <div className="portfolio-card rounded-4 shadow-sm p-4">
                <h5 className="mb-2">{item.title}</h5>
                <p className="mb-0 text-secondary">{item.category}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
