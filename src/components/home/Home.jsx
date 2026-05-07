import React from "react";
import Services from "../Services";
import WhyChooseUs from "../WhyChooseUs";
import Portfolio from "../Portfolio";
import Team from "../Team";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import "./Home.css";


const Home = () => {

  return (

    <div className="bg-white  font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden  from-slate-50 via-slate-100 to-[#1f5f73] pt-40  text-center">
        {/* DECORATIVE GRADIENT CIRCLE - Top Left */}
        <div
          className="animate-pop-up animate-float-up-down absolute top-[30px] left-[30px] w-[300px] h-[300px] rounded-full z-0 opacity-10 blur-3xl"
          style={{
            background:" linear-gradient(135deg, #014867 39.42%, #FFFFFF 100%)",

          }}
        />
        
        {/* CONTENT AREA */}
      
          {/* 1. LAYER 1: DARK WAVY ANIMATION (નવો ડાર્ક કલર જે niche આવશે) */}
     
        <div className="relative z-10 mx-auto   min-h-[440px]  ">
          <div className="absolute  leading-[40] h-full left-0 w-full  z-[1] opacity-60">

            <svg className="animate-wave-slow w-[230%] h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">

              <path fill="#114e63c1" d="M0,60c100,-30 200,-50 300,-40c100,10 200,40 300,35c100,-5 200,-40 300,-30c100,10 200,40 300,35c100,-5 200,-50 300,-40L1200,140L0,140Z"></path>

            </svg>

          </div>

          {/* 2. LAYER 2: DARK WAVY ANIMATION (નવો ડાર્ક કલર જે ઉપર આવશે) */}

          <div className="absolute  h-full left-0 w-full leading-[40] z-[2] opacity-60">

            <svg className="animate-wave-fast w-[230%] h-full drop-shadow-md" viewBox="0 0 1200 120" preserveAspectRatio="none">

              <path className="" fill="#125567b5" d="M0,60c120,-35 240,-55 360,-45c120,10 240,50 360,40c120,-10 240,-50 360,-40c120,10 240,50 360,40c120,-10 240,-55 360,-45L1200,140L0,140Z"></path>

            </svg>

          </div>

          <div className="relative  max-w-4xl  mx-auto pt-12">
           <div className="hero-content text-center mt-5 pt-5">
          <h1 className="hero-title fw-bolder mb-2 text-dark">
            Engineering digital products
          </h1>
          <h2 className="hero-subtitle fw-bold mb-4">
            that scale businesses globally
          </h2>
          
          <h5 className="hero-tagline fw-bold text-white mb-3 mt-5">
            Don't Learn Tools. How To Build Features.
          </h5>
          
          <p className="hero-text text-white mx-auto mb-4">
            Kevalon Technology delivers enterprise-grade software solutions<br/>
            Web Apps, Mobile Apps (Android, iOS, Flutter), Custom Platforms, API Integrations, and SEO-driven digital growth systems.
          </p>

          <div className="flex justify-center gap-3 mt-4">
            <button className="btn-primary-custom rounded-pill px-4 py-2 font-semibold flex items-center gap-2">
              Start Your Project <i className="bi bi-arrow-right"></i>
            </button>
            <button className="btn-outline-custom rounded-pill px-4 py-2 font-semibold flex items-center gap-2">
              Explore Services <i className="bi bi-rocket"></i>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container flex flex-row  gap-4 justify-center mt-5 pt-4 sm:grid-cols-1 md:grid-cols-3">
          <div className="stat-card text-center h-full  p-3 bg-transparent text-white border border-white/50 shadow-sm rounded-4">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold mb-1">100 +</h3>
              <p className="mb-0 text-sm text-light">Projects Delivered</p>
            </div>
          </div>
          <div className="stat-card text-center h-full p-3 bg-transparent text-white border border-white/50 shadow-sm rounded-4">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold mb-1">50 +</h3>
              <p className="mb-0 text-sm text-light">Global Clients</p>
            </div>
          </div>
          <div className="stat-card text-center h-full p-3 bg-transparent text-white border border-white/50 shadow-sm rounded-4">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold mb-1">95%</h3>
              <p className="mb-0 text-sm text-light">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


<Services />
      <WhyChooseUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
    </div>

     

  );

};

export default Home;  