import React from 'react';
import { Container } from 'react-bootstrap';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Custom, scalable web applications built with modern frameworks.',
      tags: ['React', 'Next.js', 'Node.js', 'Mongo DB']
    },
    {
      title: 'Mobile Application Development',
      desc: 'High-performance native and cross-platform apps for every device.',
      tags: ['iOS & Android', 'React Native', 'Mobile UI/UX', 'Flutter']
    },
    {
      title: 'Game Development',
      desc: 'Engaging and interactive games for mobile and web platforms.',
      tags: ['Unity', 'Multiplayer Support', '2D & 3D', 'Cross-Platform']
    },
    {
      title: 'E-Commerce Development',
      desc: 'Secure and scalable e-commerce solutions to grow your online business.',
      tags: ['Shopify', 'Custom Dashboards', 'Checkout', 'WooCommerce']
    },
  ];

  return (
    <section className="services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="services-title fw-bold">Our Core IT Services in Ahmedabad</h2>
          <p className="services-subtitle mx-auto mt-3">
            We provide secure, scalable, and high-performance IT solutions customized<br />
            for your business needs.
          </p>
        </div>

        <div className="services-cards-wrapper">
          <div className="horizontal-line"></div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="services-swiper"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto' }}>
                <div className="service-card text-center p-4">
                  <div className="icon-circle mx-auto mb-4"></div>
                  <h5 className="service-card-title text-white fw-semibold mb-3">{service.title}</h5>
                  <p className="service-card-desc mb-4">{service.desc}</p>
                  <hr className="service-divider mx-auto mb-4" />
                  <div className="service-tags d-flex flex-wrap gap-2">
  {service.tags.map((tag, i) => (
    <button key={i} className="service-tag">
      {tag}
    </button>
  ))}
</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="custom-pagination d-flex justify-content-center mt-5 gap-2"></div>
        </div>
      </Container>
    </section>
  );
};

export default Services;  