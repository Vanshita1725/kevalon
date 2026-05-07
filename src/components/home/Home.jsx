import React from "react";
import Header from "../header/Header";

import "./Home.css";

const Home = () => {

  return (

    <div className="bg-white  font-sans">

      <Header />

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
          <div className="absolute  leading-[70] h-full left-0 w-full  z-[1] opacity-60">

            <svg className="animate-wave-slow w-[220%] h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">

              <path fill="#114e63c1" d="M0,60c100,-30 200,-50 300,-40c100,10 200,40 300,35c100,-5 200,-40 300,-30c100,10 200,40 300,35c100,-5 200,-50 300,-40L1200,140L0,140Z"></path>

            </svg>

          </div>

          {/* 2. LAYER 2: DARK WAVY ANIMATION (નવો ડાર્ક કલર જે ઉપર આવશે) */}

          <div className="absolute  h-full left-0 w-full leading-[70] z-[2] opacity-60">

            <svg className="animate-wave-fast w-[220%] h-full drop-shadow-md" viewBox="0 0 1200 120" preserveAspectRatio="none">

              <path className="" fill="#125567b5" d="M0,60c120,-35 240,-55 360,-45c120,10 240,50 360,40c120,-10 240,-50 360,-40c120,10 240,50 360,40c120,-10 240,-55 360,-45L1200,140L0,140Z"></path>

            </svg>

          </div>

          <div className="relative  max-w-4xl  mx-auto pt-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">

              Engineering digital products

            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">

              that scale businesses globally

            </h2>

            <p className="text-white text-lg mb-2 drop-shadow-md">

              Don't Learn Tools. How To Build Features.

            </p>

            <p className="text-white/90 text-base mb-6 drop-shadow-md">

              Kevalon Technology delivers enterprise-grade software solutions<br />

              Web Apps, Mobile Apps (Android, iOS, Flutter), Custom Platforms, API Integrations, and SEO-driven digital growth systems.

            </p>

            {/* GLASSMORPHISM BUTTONS */}

            <div className="flex justify-center gap-5 mb-12 flex-wrap">

              <button className="px-10 py-4 rounded-full bg-[#1a3d46] text-white font-bold shadow-2xl hover:scale-105 transition-all border border-white/10">

                Start Your Project →

              </button>

              <button className="px-10 py-4 rounded-full border-2 border-white/40 text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all">

                Explore Services 🚀

              </button>

            </div>
          </div>


         


        </div>

      </section>

    </div>

  );

};

export default Home;  