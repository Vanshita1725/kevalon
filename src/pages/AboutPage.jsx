import React from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/WhyChooseUs";
import aboutImage from "../Images/2f16b11a605f0ad4cf5af255dc390cbe473aed7d.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__content">
            <span className="about-hero__badge">About Kevalon Technology</span>
            <h1 className="about-hero__title">
              We make technology work for ambitious businesses.
            </h1>
            <p className="about-hero__text">
              Kevalon Technology delivers custom digital solutions that help startups and enterprises grow. From web and mobile apps to AI-enabled platforms, we build modern products with strong performance, security, and user experience.
            </p>
            <div className="about-hero__buttons">
              <Link to="/contact" className="about-btn about-btn--primary">
                Contact Us
              </Link>
              <Link to="/services" className="about-btn about-btn--secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__card">
              <img src={aboutImage} alt="Team collaborating on a project" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-highlights">
        <div className="about-highlights__inner">
          <p className="about-highlights__eyebrow">Why clients choose us</p>
          <h2 className="about-highlights__heading">Trusted expertise, modern digital delivery</h2>
          <p className="about-highlights__desc">
            We combine a strong product mindset with technical excellence to deliver services that solve real business problems and accelerate growth.
          </p>

          <div className="about-highlight-grid">
            <article className="about-card">
              <h3 className="about-card__title">Product-first development</h3>
              <p className="about-card__text">
                We build software with clear business value, blending UI/UX, architecture, and engineering to deliver products users love.
              </p>
            </article>
            <article className="about-card">
              <h3 className="about-card__title">Reliable execution</h3>
              <p className="about-card__text">
                Our team follows modern workflows, quality practices, and responsive support to keep projects on schedule.
              </p>
            </article>
            <article className="about-card">
              <h3 className="about-card__title">Scalable solutions</h3>
              <p className="about-card__text">
                Whether launching a new app or strengthening an existing system, we create scalable software built to grow with your business.
              </p>
            </article>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;
