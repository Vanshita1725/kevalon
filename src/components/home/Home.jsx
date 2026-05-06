import React from "react";
import Header from "../header/Header";

import "./Home.css";

const Home = () => {

  return (

    <div className="bg-white min-h-screen font-sans">

      <Header />



      {/* HERO SECTION */}

      <div className="relative pt-40 pb-56 text-center overflow-hidden bg-[#2f6f7e]">

        

        {/* 1. TOP WHITE WAVE (Static Background) */}

        <div className="absolute top-0 left-0 w-full leading-[0] z-0">

          <svg viewBox="0 0 1440 320" className="w-full h-[300px] md:h-[450px]" preserveAspectRatio="none">

            <path fill="#ffffff" d="M0,0L1440,0L1440,160C1200,280,720,320,0,160Z"></path>

          </svg>

        </div>



        {/* 2. LAYER 1: LIGHT WAVY ANIMATION (તમારો હાલનો કલર) */}

        <div className="absolute bottom-0 left-0 w-full leading-[0] z-[1] opacity-60">

          <svg className="animate-wave-slow w-[200%] h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">

            <path fill="#4f8a99" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>

          </svg>

        </div>



        {/* 3. LAYER 2: DARK WAVY ANIMATION (નવો ડાર્ક કલર જે ઉપર આવશે) */}

        <div className="absolute bottom-0 left-0 w-full leading-[0] z-[2]">

          <svg className="animate-wave-fast w-[200%] h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">

            <path fill="#1a3d46" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" transform="scale(-1, 1) translate(-1200, 0)"></path>

          </svg>

        </div>



        {/* CONTENT AREA */}

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">

            Engineering digital products

          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">

            that scale businesses globally

          </h2>



          {/* GLASSMORPHISM BUTTONS */}

          <div className="flex justify-center gap-5 mb-16 flex-wrap">

            <button className="px-10 py-4 rounded-full bg-[#1a3d46] text-white font-bold shadow-2xl hover:scale-105 transition-all border border-white/10">

              Start Your Project →

            </button>

            <button className="px-10 py-4 rounded-full border-2 border-white/40 text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all">

              Explore Services 🚀

            </button>

          </div>



          {/* GLASS STATS CARDS */}

         

        </div>



        {/* એનિમેશન માટે CSS (તમે આને તમારી CSS ફાઈલમાં પણ મૂકી શકો) */}

        <style jsx>{`

          @keyframes waveMove {

            from { transform: translateX(0); }

            to { transform: translateX(-50%); }

          }

          .animate-wave-slow {

            animation: waveMove 20s linear infinite;

          }

          .animate-wave-fast {

            animation: waveMove 12s linear infinite reverse;

          }

        `}</style>

      </div>

    </div>

  );

};



export default Home;  