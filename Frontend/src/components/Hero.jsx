import { Link } from "react-router-dom";
import heroImage from "../assets/images/maa-tadka-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#063c2d] text-white">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maa Tadka authentic Indian spices"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      {/* Keep this light because the image already has a dark green background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#063c2d]/60 via-[#063c2d]/20 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[720px] w-[min(1180px,calc(100%-32px))] items-center">

        <div className="w-full">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[620px] pt-16 lg:pt-0">

            {/* Small heading */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#e9b83f]" />

              <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#e9b83f]">
                Authentic Indian Spices
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-6xl leading-[0.95] tracking-[-0.025em] text-white sm:text-7xl lg:text-[88px]">
              Maa Tadka
            </h1>

            {/* Gold underline */}
            <div className="mt-5 h-1 w-24 rounded-full bg-[#e9b83f]" />

            {/* Description */}
            <p className="mt-6 max-w-[600px] text-lg leading-8 text-white/85 sm:text-xl">
              Premium Indian spices crafted with care to bring authentic
              aroma, colour and flavour to your everyday cooking.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/products"
                className="inline-flex min-h-[58px] items-center justify-center bg-[#e9b83f] px-9 text-sm font-extrabold uppercase tracking-wide text-[#24170f] transition hover:bg-[#f4c957]"
              >
                Shop Masalas
                <span className="ml-4 text-xl">
                  →
                </span>
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-[58px] items-center justify-center border border-white/40 bg-white/5 px-9 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-[#e9b83f] hover:bg-white/10"
              >
                Discover Our Story
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/20 pt-7">

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9b83f] text-sm font-bold text-[#063c2d]">
                  ✓
                </span>

                <span className="text-sm font-semibold text-white">
                  100% Pure
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9b83f] text-sm font-bold text-[#063c2d]">
                  ✓
                </span>

                <span className="text-sm font-semibold text-white">
                  No Added Colours
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9b83f] text-sm font-bold text-[#063c2d]">
                  ✓
                </span>

                <span className="text-sm font-semibold text-white">
                  No Preservatives
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;