import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/maa-tadka-logo.jpeg";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const links = [
    ["Home", "/"],
    ["Our Products", "/products"],
    ["About Us", "/about"],
    ["Why Us", "/why-us"],
    ["Recipes", "/recipes"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50">

      {/* Top announcement */}
      <div className="bg-[#103F2C] px-4 py-2 text-center text-[9px] font-bold uppercase tracking-[2px] text-white sm:text-[10px]">
        Pure Spices • Authentic Flavour • Made With Care
      </div>

      {/* Main Navbar */}
      <div className="border-b border-[#e9e2d4] bg-[#FFFDF7]/95 shadow-[0_4px_20px_rgba(45,34,20,0.06)] backdrop-blur-xl">

        <div className="mx-auto flex h-[78px] max-w-[1380px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
            onClick={() => setMobileMenu(false)}
          >

            <div className="relative">

              {/* Logo glow */}
              <div className="absolute inset-0 scale-90 rounded-full bg-[#D9A928]/20 blur-xl transition group-hover:bg-[#D9A928]/35" />

              <img
                src={logo}
                alt="Maa Tadka"
                className="relative h-[62px] w-[62px] object-contain transition duration-300 group-hover:scale-105"
              />

            </div>

            {/* Brand name */}
            <div className="hidden sm:block">
              <div className="font-serif text-[25px] font-bold leading-none text-[#103F2C]">
                Maa Tadka
              </div>

              <div className="mt-1.5 text-[8px] font-bold uppercase tracking-[2.5px] text-[#98211D]">
                Authentic Indian Spices
              </div>
            </div>

          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">

            {links.map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className={`relative py-7 text-[11px] font-bold transition ${
                  isActive(path)
                    ? "text-[#98211D]"
                    : "text-[#34483D] hover:text-[#98211D]"
                }`}
              >
                {label}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#D9A928] transition-all ${
                    isActive(path) ? "w-5" : "w-0"
                  }`}
                />
              </Link>
            ))}

          </nav>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-1">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#34483D] transition hover:bg-[#f1ecdf] hover:text-[#98211D] sm:flex"
            >
              <span className="text-[22px] leading-none">
                ⌕
              </span>
            </button>

            {/* Account */}
            <Link
              to="/login"
              aria-label="Account"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#34483D] transition hover:bg-[#f1ecdf] hover:text-[#98211D]"
            >
              <span className="text-[20px]">
                ♙
              </span>
            </Link>

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#34483D] transition hover:bg-[#f1ecdf] hover:text-[#98211D] sm:flex"
            >
              <span className="text-[19px]">
                ♡
              </span>
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#103F2C] text-white shadow-md transition hover:bg-[#98211D]"
            >
              <span className="text-[19px]">
                🛍
              </span>

              <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-[#FFFDF7] bg-[#98211D] px-1 text-[8px] font-bold text-white">
                2
              </span>
            </Link>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-[#103F2C] transition hover:bg-[#f1ecdf] lg:hidden"
            >
              <span className="text-2xl leading-none">
                {mobileMenu ? "×" : "☰"}
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="border-b border-[#e8e1d0] bg-[#FFFDF7] shadow-lg lg:hidden">

          <div className="mx-auto max-w-[1380px] px-6 py-5">

            <nav className="flex flex-col">

              {links.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center justify-between border-b border-[#eee8d9] py-4 text-sm font-bold ${
                    isActive(path)
                      ? "text-[#98211D]"
                      : "text-[#294639]"
                  }`}
                >
                  {label}

                  <span className="text-lg">
                    →
                  </span>
                </Link>
              ))}

              {/* Mobile account */}
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="mt-4 flex items-center justify-center rounded-full bg-[#103F2C] py-3 text-sm font-bold text-white"
              >
                My Account
              </Link>

            </nav>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;