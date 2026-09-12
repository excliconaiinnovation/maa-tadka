import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      icon: Leaf,
      title: "100% Pure",
      text: "Pure spices with no artificial colours.",
    },
    {
      icon: ShieldCheck,
      title: "Traditional",
      text: "Authentic taste and traditional methods.",
    },
    {
      icon: Heart,
      title: "Premium Quality",
      text: "Carefully sourced quality ingredients.",
    },
    {
      icon: Sprout,
      title: "Health Focused",
      text: "Good spices for a healthier kitchen.",
    },
  ];

  const promises = [
    "100% Pure Spices",
    "No Added Colours",
    "No Preservatives",
    "Premium Quality",
    "Fast & Safe Delivery",
    "Trusted by Thousands",
    "Rich Aroma & Flavour",
    "Health Focused",
  ];

  return (
    <main className="bg-[#F8F4E8] text-[#103F2C]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#063C2D]">

        <img
          src="/about-us-banner.png"
          alt="Maa Tadka authentic Indian spices"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063C2D]/95 via-[#063C2D]/70 to-[#063C2D]/25" />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1380px] items-center px-6 py-20 lg:px-12">

          <div className="max-w-[650px]">

            {/* Breadcrumb */}
            <div className="mb-6 text-xs font-medium text-white/70">
              Home
              <span className="mx-2 text-[#E9B83F]">›</span>
              About Us
            </div>

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E9B83F]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E9B83F]">
                A Tradition of Purity and Taste
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              About Us
            </h1>

            <p className="mt-5 max-w-[570px] text-base leading-7 text-white/80 sm:text-lg">
              Bringing the warmth of authentic Indian spices to kitchens
              everywhere, one delicious meal at a time.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <div className="relative">

            {/* Decorative border */}
            <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#D9A928]/40" />

            <img
              src="/about-story.png"
              alt="Maa Tadka family and Indian cooking"
              className="relative z-10 h-[400px] w-full object-cover sm:h-[500px]"
            />

          </div>


          {/* CONTENT */}
          <div>

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#98211D]">
              Our Story
            </div>

            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#103F2C] sm:text-5xl">
              Taste That Feels
              <br />
              Like Home
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#E9B83F]" />

            <p className="mt-7 text-sm leading-7 text-[#66736B] sm:text-base">
              Maa Tadka was born from a simple idea — every great Indian
              meal starts with great spices.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#66736B] sm:text-base">
              Our journey is inspired by the traditional kitchens of India,
              where spices are carefully selected, blended and used to create
              food filled with aroma, colour and unforgettable flavour.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#66736B] sm:text-base">
              We bring that same care to every Maa Tadka pack, combining
              authentic taste with consistent quality for your everyday
              cooking.
            </p>

            {/* Signature */}
            <div className="mt-7 flex items-center gap-3">
              <span className="text-2xl text-[#98211D]">♥</span>

              <span className="font-serif text-lg italic text-[#103F2C]">
                Har Khane Mein Maa Ka Tadka
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="border-y border-[#E4DDCA] bg-[#FBF8EF] px-5 py-14 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-10 text-center">

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#98211D]">
              What We Stand For
            </div>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#103F2C] sm:text-4xl">
              Our Values
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-[#E1D9C5] bg-white px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9A928]/50 bg-[#F7EECF] text-[#103F2C] transition group-hover:bg-[#103F2C] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-[#103F2C]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-[#68766E]">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR JOURNEY
      ===================================================== */}
      <section className="bg-[#103F2C] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1200px]">

          <div className="text-center">

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#E9B83F]">
              Our Journey
            </div>

            <h2 className="mt-3 font-serif text-4xl font-bold">
              Growing With Your Kitchen
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-6 text-white/60">
              From a small passion for authentic flavours to a growing
              spice family trusted by kitchens everywhere.
            </p>

          </div>


          {/* Timeline */}
          <div className="mt-14 grid gap-8 md:grid-cols-4">

            {[
              ["2000", "The Beginning", "A passion for authentic Indian spices begins."],
              ["2005", "First Products", "Traditional spice blends reach more kitchens."],
              ["2015", "Growing Family", "Maa Tadka grows with loyal customers."],
              ["Today", "Our Mission", "Pure spices for a healthier, happier kitchen."],
            ].map(([year, title, text]) => (
              <div
                key={year}
                className="relative border-t border-[#E9B83F]/40 pt-6 text-center"
              >

                <div className="mx-auto -mt-[37px] flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#103F2C] bg-[#E9B83F]" />

                <div className="mt-5 font-serif text-3xl font-bold text-[#E9B83F]">
                  {year}
                </div>

                <h3 className="mt-2 text-sm font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/55">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          QUALITY PROMISE
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* LEFT */}
            <div>

              <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#98211D]">
                Why Maa Tadka
              </div>

              <h2 className="mt-3 font-serif text-4xl font-bold text-[#103F2C] sm:text-5xl">
                Pure Spices
                <br />
                For A Healthier You
              </h2>

              <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#68766E]">
                We believe that good food deserves good ingredients.
                That's why every Maa Tadka product is made with care,
                quality and authentic Indian flavour.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-3 bg-[#E9B83F] px-7 py-4 text-xs font-extrabold uppercase tracking-wide text-[#24170F] transition hover:bg-[#F4C957]"
              >
                Explore Our Products
                <ArrowRight size={16} />
              </Link>

            </div>


            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {promises.map((promise) => (
                <div
                  key={promise}
                  className="flex min-h-[125px] flex-col items-center justify-center border border-[#DED6C1] bg-[#FBF8EF] px-3 text-center transition hover:border-[#D9A928] hover:bg-white"
                >

                  <CheckCircle2
                    size={25}
                    strokeWidth={1.6}
                    className="text-[#103F2C]"
                  />

                  <span className="mt-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-[#385345]">
                    {promise}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#98211D] px-5 py-16 text-center text-white sm:px-8">

        <div className="relative z-10 mx-auto max-w-[750px]">

          <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#F7D873]">
            Taste The Difference
          </div>

          <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            Bring Home The Maa Tadka
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/75">
            Authentic Indian spices crafted with care for delicious
            everyday meals.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 bg-[#E9B83F] px-8 py-4 text-xs font-extrabold uppercase tracking-wide text-[#24170F] transition hover:bg-[#F4C957]"
          >
            Shop Masalas
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;