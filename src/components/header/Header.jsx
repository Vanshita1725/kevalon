import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header Wrapper */}
      <div className="w-full flex justify-center mt-5 font-['Nunito_Sans'] px-3 relative z-50">
        <div className="
          relative w-full max-w-[1200px]
          flex items-center justify-between
          px-[14px] pr-5 py-[10px]
          rounded-[60px]
          shadow-[inset_0px_18.5px_40.6px_-3.5px_rgba(3,70,101,0.07),0px_4px_17.3px_rgba(3,70,101,0.10)]
          bg-[linear-gradient(135deg,rgba(1,72,103,0.02)_0%,rgba(0,207,255,0.02)_100%)]
          backdrop-blur-[12px]
          max-[900px]:rounded-[22px] max-[900px]:px-4 max-[900px]:pr-3
        ">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0 cursor-pointer">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9Pyj6mPiWW/p4s798c4_expires_30_days.png"
              alt="Kevalon Technology Logo"
              className="h-[clamp(42px,6vw,58px)] w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden min-[901px]:flex items-center gap-[clamp(20px,3vw,44px)] mx-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `
                  text-decoration-none relative cursor-pointer whitespace-nowrap
                  text-[clamp(14px,1.4vw,16px)]
                  font-semibold tracking-[0.1px]
                  pb-[5px]
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#0d3d5a] border-b-2 border-[#0d3d5a]"
                      : "text-[#4b5563] border-b-2 border-transparent hover:border-[#0d3d5a]"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop Button */}
            <button className="btn-primary-custom rounded-pill px-4 py-2 font-semibold flex items-center gap-2 hidden min-[901px]:flex">
              Get Started
            </button>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              className="
                flex min-[901px]:hidden
                flex-col gap-[5px]
                cursor-pointer
                p-[6px]
                bg-transparent border-none
                z-[1001]
              "
            >
              <span
                className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dark Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-[2px]
          z-[998]
          transition-all duration-300
          hidden max-[900px]:block
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Mobile Offcanvas Drawer (CHANGES MADE HERE FOR LEFT-TO-RIGHT) */}
      <div
        className={`
          fixed top-0 left-0 h-screen
          w-[280px]
          bg-white
          z-[999]
          shadow-[10px_0_30px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-in-out
          hidden max-[900px]:flex
          flex-col
          overflow-y-auto
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header Area */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[rgba(13,61,90,0.08)]">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9Pyj6mPiWW/p4s798c4_expires_30_days.png"
            alt="logo"
            className="h-[45px]"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[30px] leading-none text-[#0d3d5a] hover:opacity-70 transition-opacity"
          >
            &times;
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col px-4 py-5 gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `
                px-4 py-3
                rounded-[12px]
                text-[15px]
                font-semibold
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[rgba(13,61,90,0.08)] text-[#0d3d5a]"
                    : "text-[#0d3d5a] hover:bg-[rgba(13,61,90,0.06)]"
                }
              `}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Action Button inside mobile menu */}
          <button className="btn-primary-custom rounded-pill px-4 py-3 font-semibold mt-3">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}