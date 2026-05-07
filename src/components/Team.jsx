import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Team.css';

// Using local images from the folder
import Member1 from '../Images/fa88305e0eb98cb1d11865dba2fbfda76e2af9ae.jpg';
import Member2 from '../Images/9821f6c9c1254c0ebc4202176504533254e64ac9.jpg';
import Member3 from '../Images/daf81db03a6765e2dba3a0aaf050c71c3a0b30b9.jpg';
import Member4 from '../Images/c3611b4e188c199759f5d353773da7e24619e19a.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Harsh Kothari',
      role: 'Founder & CEO',
      image: Member1
    },
    {
      name: 'Sachin Prajapati',
      role: 'HR & Technical Head',
      image: Member2
    },
    {
      name: 'Abhishek Shah',
      role: 'Sales & Digital Marketing Head',
      image: Member3
    },
    {
      name: 'Hetvi Pandya',
      role: 'MERN Stack Developer',
      image: Member4
    }
  ];

  return (
    <section className="team-section py-5">
      <Container>
        <div className="text-center mb-5 pb-3">
          <div className="d-inline-flex rounded-pill px-4 py-2 mb-3 team-badge">
            <span className="fw-semibold text-primary-custom">Meet the Experts</span>
          </div>
          <h2 className="team-title fw-bold">Kevalon Technology Team - IT Company Ahmedabad</h2>
          <p className="team-subtitle text-dark mx-auto mt-3">
            Meet the founders and expert team at Kevalon Technology Ahmedabad - Leading IT company delivering web development, mobile app development, UI/UX design, and digital marketing solutions.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <Col lg={3} md={6} sm={12} key={idx} className="text-center team-member-col">
              <div className="team-member">
                <div className="member-image-wrapper mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="member-image shadow-sm" />
                </div>
                <h5 className="member-name fw-bolder mb-1">{member.name}</h5>
                <p className="member-role text-muted">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
