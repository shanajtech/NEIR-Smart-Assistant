

import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "../components/Cointainer";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <div className="bg-[#0F1C2E] sticky top-0 z-50 shadow-md">
      <Container className="max-w-[1200px] mx-auto px-4 py-[15px]">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="NEIR Logo" className="w-[50px] h-[50px]" />
            <h2 className="text-white text-lg font-semibold">
              NEIR Assistant
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white text-[14px]">

            <Link to="/" className="hover:text-[#4ED4F3]">Home</Link>
            <Link to="/about" className="hover:text-[#4ED4F3]">About IMEI</Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center gap-1 hover:text-[#4ED4F3]"
              >
                Register Guideline ▾
              </button>

              {dropOpen && (
                <div className="absolute top-full mt-2 left-0 bg-[#142B44] rounded-md shadow-lg w-[200px] overflow-hidden z-50">
                  <Link
                    to="/register/new"
                    className="block px-4 py-3 hover:bg-[#4ED4F3] hover:text-black"
                    onClick={() => setDropOpen(false)}
                  >
                    New Phone Registration
                  </Link>
                  <Link
                    to="/register/old"
                    className="block px-4 py-3 hover:bg-[#4ED4F3] hover:text-black"
                    onClick={() => setDropOpen(false)}
                  >
                    Old Phone Registration
                  </Link>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#142B44] rounded-xl p-4 space-y-4 text-white">

            <Link to="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block" onClick={() => setMenuOpen(false)}>About IMEI</Link>

            <div>
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="w-full text-left"
              >
                Register Guideline ▾
              </button>

              {dropOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/register/new" onClick={() => setMenuOpen(false)} className="block">
                    New Phone Registration
                  </Link>
                  <Link to="/register/old" onClick={() => setMenuOpen(false)} className="block">
                    Old Phone Registration
                  </Link>
                </div>
              )}
            </div>

          </div>
        )}

      </Container>
    </div>
  );
};

export default Header;







