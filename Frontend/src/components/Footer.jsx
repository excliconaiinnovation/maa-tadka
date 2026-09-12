// src/components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#291711] text-white">

      {/* Newsletter */}
      <section className="border-b border-white/10">
        <div className="container-shell py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#e3a63c]">
                Stay Connected
              </p>

              <h2 className="font-display text-3xl sm:text-4xl">
                Get recipes & offers in your inbox
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Discover delicious recipes, new products and special offers
                from Maa Tadka.
              </p>
            </div>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-h-12 flex-1 rounded-full border border-white/10 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#e3a63c]"
              />

              <button
                type="submit"
                className="min-h-12 rounded-full bg-[#d99b35] px-7 font-bold text-[#291711] transition hover:bg-[#efb94e]"
              >
                Subscribe →
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container-shell py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <div className="font-display text-3xl text-[#e3a63c]">
                Maa Tadka
              </div>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
                Taste of Tradition
              </p>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Authentic Indian spices and masalas made with carefully selected
              ingredients and traditional flavours.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:bg-[#8d1f18]"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:bg-[#8d1f18]"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:bg-[#8d1f18]"
              >
                ▶
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/60">

              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="transition hover:text-white"
              >
                Shop Masalas
              </Link>

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/recipes"
                className="transition hover:text-white"
              >
                Recipes
              </Link>

              <Link
                to="/why-choose-us"
                className="transition hover:text-white"
              >
                Why Choose Us
              </Link>

            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-5 font-semibold">
              Customer Care
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/60">

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                className="transition hover:text-white"
              >
                My Account
              </Link>

              <Link
                to="/cart"
                className="transition hover:text-white"
              >
                Shopping Cart
              </Link>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Shipping & Delivery
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-white/60">

              <p>
                <span className="mb-1 block text-white/40">
                  Phone
                </span>

                +91 98765 43210
              </p>

              <p>
                <span className="mb-1 block text-white/40">
                  Email
                </span>

                hello@maatadka.com
              </p>

              <p>
                <span className="mb-1 block text-white/40">
                  Hours
                </span>

                Mon – Sat, 9:00 AM – 6:00 PM
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Maa Tadka. All rights reserved.
          </p>

          <p>
            Made with ❤️ for authentic Indian flavours.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;