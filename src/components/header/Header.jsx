import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Header() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex  justify-center mt-20 font-[Nunito_Sans]">
      <div
        className="
          relative w-[95%] max-w-[1200px]
          flex items-center justify-between
          px-[14px] pr-5 py-[10px]
          rounded-[60px]
          shadow-[inset_0px_18.5px_40.6px_-3.5px_rgba(3,70,101,0.07),0px_4px_17.3px_rgba(3,70,101,0.10)]
          bg-[linear-gradient(135deg,rgba(1,72,103,0.02)_0%,rgba(0,207,255,0.02)_100%)]
          max-[700px]:flex-wrap
          max-[700px]:rounded-[28px]
          max-[700px]:px-4
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0 cursor-pointer">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9Pyj6mPiWW/p4s798c4_expires_30_days.png"
            alt="Kevalon Technology Logo"
            className="h-[clamp(42px,6vw,58px)] w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav
          className="
            flex items-center
            gap-[clamp(20px,3.5vw,44px)]
            absolute left-1/2 -translate-x-1/2
            max-[700px]:hidden
          "
        >
          {navLinks.map((link) => (
            <span
              key={link}
              onClick={() => setActive(link)}
              className={`
                inline-block relative cursor-pointer whitespace-nowrap
                text-[clamp(14px,1.4vw,16px)]
                font-semibold tracking-[0.1px]
                pb-[5px]
                transition-colors duration-200
                ${
                  active === link
                    ? "text-[#0d3d5a] border-b-2 border-[#0d3d5a]"
                    : "text-[#4b5563] border-b-2 border-transparent hover:border-[#0d3d5a]"
                }
              `}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Button */}
          <button
            className="
              shrink-0 whitespace-nowrap
              rounded-full border-none
              px-[clamp(18px,2.2vw,28px)]
              py-[clamp(9px,1.2vw,11px)]
              text-[clamp(13.5px,1.4vw,15px)]
              font-bold tracking-[0.1px]
              text-white
              bg-[linear-gradient(137.68deg,#61BBC5_0.13%,#034665_100%)]
              shadow-[0_3px_14px_rgba(10,100,120,0.45),0_1px_3px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)]
              transition-all duration-200
              hover:-translate-y-[2px]
              hover:scale-[1.03]
              hover:shadow-[0_6px_22px_rgba(10,100,120,0.58),0_2px_6px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]
              active:scale-[0.97]
            "
          >
            Get Started
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="
              hidden max-[700px]:flex
              flex-col gap-[5px]
              cursor-pointer
              p-[6px]
              bg-transparent border-none
            "
          >
            <span
              className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />

            <span
              className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-[22px] h-[2.5px] rounded-[2px] bg-[#0d3d5a] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              hidden max-[700px]:flex
              flex-col w-full
              gap-1
              pt-3 pb-1.5 px-2
              mt-[10px]
              border-t border-[rgba(13,61,90,0.1)]
            "
          >
            {navLinks.map((link) => (
              <span
                key={link}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className={`
                  text-[15px]
                  px-3 py-[9px]
                  rounded-[10px]
                  cursor-pointer
                  transition-all duration-200
                  ${
                    active === link
                      ? "bg-[rgba(13,61,90,0.07)] text-[#0d3d5a]"
                      : "text-[#0d3d5a] hover:bg-[rgba(13,61,90,0.07)]"
                  }
                `}
              >
                {link}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}