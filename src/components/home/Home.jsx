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
    <div className="bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-40 mt-40 text-center ">
        
        {/* DECORATIVE GRADIENT CIRCLE */}
        <div
          className="animate-pop-up animate-float-up-down absolute top-[30px] left-[30px] w-[300px] h-[300px] rounded-full z-0 opacity-10 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, #014867 39.42%, #FFFFFF 100%)",
          }}
        />

        {/* WAVE CONTAINER */}
        <div className="relative mx-auto min-h-[630px]  ">

        {/* WAVE LAYER 1 */}
          <div className="absolute left-0  w-full h-[116%] z-[1] opacity-60">
            <svg
              className="animate-wave-slow w-[230%] h-[90%]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
            <path
  fill="#114e63c1"
  d="M0,46.5
     c100,-10 200,-18 300,-15
     c100,5 200,15 300,12
     c100,-3 200,-15 300,-10
     c100,5 200,15 300,12
     c100,-3 200,-18 300,-15
     L1200,140
     L0,140Z"
/>
            </svg>
          </div>

          {/* WAVE LAYER 2 */}
          <div className="absolute left-0  w-full h-[116%] z-[2] opacity-60">
            <svg
              className="animate-wave-fast w-[230%] h-[90%] drop-shadow-md"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                fill="#125567b5"
               d="M0,46.5 c100,-10 200,-16 300,-15
     c100,5 200,15 300,12
     c100,-3 200,-15 300,-10
     c100,5 200,15 300,12
     c100,-3 200,-18 300,-15
      L1200,140
     L0,140Z"
/>
            </svg>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl mx-auto pt-2 ">

            <div className="hero-content text-center ">

              <h1 className="hero-title fw-bolder mb-2 text-dark mt-[40px]">
                Engineering digital products
              </h1>

              <h2 className="hero-subtitle fw-bold mb-4 ">
                that scale businesses globally
              </h2>
       


              <h5 className="hero-tagline  justify-center text-center fw-bold text-white mb-3 mt-5">
                Don't Learn Tools. How To Build Features.
              </h5>

              <p className="hero-text text-white mx-auto mb-4">
                Kevalon Technology delivers enterprise-grade software
                solutions
                <br />
                Web Apps, Mobile Apps (Android, iOS, Flutter), Custom
                Platforms, API Integrations, and SEO-driven digital
                growth systems.
              </p>

              {/* BUTTONS */}
              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                
                <button className="btn-primary-custom rounded-pill px-4 py-2 font-semibold flex items-center gap-2">
                  Start Your Project
                  <i className="bi bi-arrow-right"></i>
                </button>

                <button className="btn-outline-custom rounded-pill px-4 py-2 font-semibold flex items-center gap-2">
                  Explore Services
                  <i className="bi bi-rocket"></i>
                </button>

              </div>
            </div>

            {/* STATS SECTION */}
            <div className="stats-container flex flex-row flex-wrap gap-4 justify-center mt-5 pt-4">
              
              <div className="stat-card text-center h-full p-3  text-white border border-white/50  rounded-4">
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold mb-1">100 +</h3>
                  <p className="mb-0 text-sm text-light">
                    Projects Delivered
                  </p>
                </div>
              </div>

              <div className="stat-card text-center h-full p-3  text-white border border-white/50 shadow-sm rounded-4">
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold mb-1">50 +</h3>
                  <p className="mb-0 text-sm text-light">
                    Global Clients
                  </p>
                </div>
              </div>

              <div className="stat-card text-center h-full p-3 text-white border border-white/50 shadow-sm rounded-4">
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold mb-1">95%</h3>
                  <p className="mb-0 text-sm text-light">
                    Client Satisfaction
                  </p>
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