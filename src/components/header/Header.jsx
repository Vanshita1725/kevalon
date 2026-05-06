import { useState } from "react";
import "./Header.css";

const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Header() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     

      <div className="kev-header-wrap">
        <div className="kev-pill">

          {/* LOGO */}
          <div className="kev-logo">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9Pyj6mPiWW/p4s798c4_expires_30_days.png"
              alt="Kevalon Technology Logo"
            />
          </div>

          {/* NAV — desktop */}
          <nav className="kev-nav">
            {navLinks.map((link) => (
              <span
                key={link}
                className={`kev-link ${active === link ? "active" : ""}`}
                onClick={() => setActive(link)}
              >
                {link}
              </span>
            ))}
          </nav>

          {/* Right side: button + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button className="kev-btn">Get Started</button>

            {/* Hamburger */}
            <button
              className="kev-hamburger"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <span style={menuOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
            </button>
          </div>

          {/* NAV — mobile dropdown */}
          {menuOpen && (
            <div className="kev-mobile-menu">
              {navLinks.map((link) => (
                <span
                  key={link}
                  className={`kev-link ${active === link ? "active" : ""}`}
                  onClick={() => { setActive(link); setMenuOpen(false); }}
                >
                  {link}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}