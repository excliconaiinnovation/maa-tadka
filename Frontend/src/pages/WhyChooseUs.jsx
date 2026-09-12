import {
  ArrowRight,
  Check,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
  Heart,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      number: "01",
      title: "100% Pure Spices",
      text: "Carefully selected spices made with purity in mind for authentic Indian cooking.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Quality You Can Trust",
      text: "Every product is carefully sourced, processed and packed to maintain consistent quality.",
    },
    {
      icon: Check,
      number: "03",
      title: "No Added Colours",
      text: "We believe spices should look beautiful naturally without unnecessary artificial colours.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Authentic Taste",
      text: "Traditional Indian flavours that bring the familiar taste of home to every meal.",
    },
    {
      icon: Truck,
      number: "05",
      title: "Fast & Safe Delivery",
      text: "Securely packed products delivered fresh and safely to your doorstep.",
    },
    {
      icon: Heart,
      number: "06",
      title: "Made With Care",
      text: "Every Maa Tadka pack is prepared with the same care we would choose for our own family.",
    },
  ];

  const promises = [
    "Premium Quality",
    "No Preservatives",
    "Natural Ingredients",
    "Rich Aroma",
    "Freshly Packed",
    "Trusted Quality",
    "Authentic Flavour",
    "Family Friendly",
  ];

  return (
    <main className="bg-[#F7F3E7] text-[#103F2C]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#063C2D]">

        {/* Background image */}
        <img
          src="/about-us-banner.png"
          alt="Maa Tadka spices"
          className="absolute inset-0 h-full w-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#063C2D] via-[#063C2D]/90 to-[#063C2D]/55" />

        <div className="relative z-10 mx-auto flex min-h-[410px] max-w-[1380px] items-center px-6 py-20 lg:px-12">

          <div className="max-w-[700px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E9B83F]" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#E9B83F]">
                The Maa Tadka Difference
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1] text-white sm:text-6xl lg:text-7xl">
              Why Choose Us?
            </h1>

            <p className="mt-6 max-w-[600px] text-sm leading-7 text-white/75 sm:text-base">
              Because great food begins with great spices. We bring purity,
              quality and authentic Indian flavour to every kitchen.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1050px] text-center">

          <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#98211D]">
            What Makes Us Different
          </div>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#103F2C] sm:text-5xl">
            Because You Deserve The Best
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-[#E9B83F]" />

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-7 text-[#6D776F] sm:text-base">
            From sourcing the finest ingredients to carefully packing every
            product, Maa Tadka focuses on one thing — giving your family
            delicious food with authentic flavour and trusted quality.
          </p>

        </div>


        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative overflow-hidden border border-[#DDD5C2] bg-[#FFFDF7] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CDA62D] hover:shadow-[0_18px_45px_rgba(16,63,44,0.10)]"
              >

                {/* Number */}
                <div className="absolute right-5 top-4 font-serif text-4xl font-bold text-[#103F2C]/[0.06]">
                  {feature.number}
                </div>


                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D9A928]/40 bg-[#F5EFCF] text-[#103F2C] transition-all duration-300 group-hover:bg-[#103F2C] group-hover:text-[#F4CE4C]">
                  <Icon
                    size={25}
                    strokeWidth={1.7}
                  />
                </div>


                {/* Content */}
                <h3 className="mt-6 font-serif text-xl font-bold text-[#103F2C]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#737C75]">
                  {feature.text}
                </p>


                {/* Bottom line */}
                <div className="mt-6 h-[2px] w-0 bg-[#E9B83F] transition-all duration-300 group-hover:w-14" />

              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="bg-[#103F2C] px-5 py-14 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1100px] grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">

          <div className="px-5 text-center">
            <div className="font-serif text-4xl font-bold text-[#E9B83F]">
              100%
            </div>

            <div className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-white/70">
              Pure Spices
            </div>
          </div>


          <div className="px-5 text-center">
            <div className="font-serif text-4xl font-bold text-[#E9B83F]">
              25+
            </div>

            <div className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-white/70">
              Spice Varieties
            </div>
          </div>


          <div className="mt-8 border-l-0 px-5 text-center lg:mt-0 lg:border-l">
            <div className="font-serif text-4xl font-bold text-[#E9B83F]">
              10K+
            </div>

            <div className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-white/70">
              Happy Customers
            </div>
          </div>


          <div className="mt-8 px-5 text-center lg:mt-0">
            <div className="font-serif text-4xl font-bold text-[#E9B83F]">
              4.9
            </div>

            <div className="mt-2 flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-[2px] text-white/70">
              <Star size={11} fill="currentColor" />
              Customer Rating
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITY PROMISE
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden">

            <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#D9A928]/50" />

            <img
              src="/about-story.png"
              alt="Fresh Indian spices"
              className="relative z-10 h-[400px] w-full object-cover sm:h-[500px]"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#98211D]">
              Our Promise
            </div>

            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#103F2C] sm:text-5xl">
              Pure Spices.
              <br />
              Honest Flavour.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#68766E]">
              We don't believe in shortcuts. Every Maa Tadka product is
              created with attention to quality, aroma and authentic taste.
            </p>


            {/* Checklist */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {promises.map((promise) => (
                <div
                  key={promise}
                  className="flex items-center gap-3"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#103F2C] text-[#E9B83F]">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-xs font-semibold text-[#42584B]">
                    {promise}
                  </span>

                </div>
              ))}

            </div>


            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 bg-[#E9B83F] px-7 py-4 text-xs font-extrabold uppercase tracking-wide text-[#24170F] transition hover:bg-[#F4C957]"
            >
              Explore Our Spices
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#98211D] px-5 py-16 text-center sm:px-8">

        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-[750px]">

          <Sparkles
            size={30}
            className="mx-auto text-[#F5D46A]"
          />

          <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Taste The Maa Tadka Difference
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/75">
            Bring home authentic Indian spices and turn everyday meals
            into something special.
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

export default WhyChooseUs;