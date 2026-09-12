import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import SectionTitle from "../components/SectionTitle";
import { products } from "../data/products";

import {
  ArrowRight,
  Check,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";


function Home() {
  return (
    <div>

      {/* HERO */}
      <Hero />


      {/* TRUST BAR */}

      <section className="border-b border-[#e4decc] bg-[#FFFDF7]">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 divide-x divide-[#e4decc] sm:grid-cols-3 lg:grid-cols-5">

          {[
            {
              icon: Leaf,
              title: "100% Pure",
              text: "Premium ingredients",
            },
            {
              icon: ShieldCheck,
              title: "No Colours",
              text: "Naturally processed",
            },
            {
              icon: Check,
              title: "No Preservatives",
              text: "Clean ingredients",
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              text: "Carefully crafted",
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              text: "Fresh at your door",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 px-4 py-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf4ec] text-[#103F2C]">
                  <Icon size={17} />
                </div>

                <div>
                  <div className="text-[10px] font-bold text-[#103F2C]">
                    {item.title}
                  </div>

                  <div className="mt-1 hidden text-[9px] text-[#7c857e] sm:block">
                    {item.text}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* CATEGORIES */}

      <section className="bg-[#F7F3E7] px-5 py-20 sm:px-8 lg:px-12">

        <SectionTitle
          eyebrow="Explore Our Range"
          title="The Spices Behind Every Great Meal"
          description="From everyday essentials to signature blends, discover the flavours that make Indian food unforgettable."
        />

        <div className="mx-auto mt-12 grid max-w-[1150px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {[
            ["Haldi", "Turmeric", "🌾", "#D8A51F"],
            ["Mirch", "Red Chilli", "🌶️", "#A32621"],
            ["Dhaniya", "Coriander", "🌿", "#437044"],
            ["Jeera", "Cumin", "🌱", "#8D6B36"],
            ["Garam Masala", "Signature Blend", "🫚", "#70482D"],
            ["Chaat Masala", "Tangy Blend", "✨", "#8A4C34"],
          ].map(([title, subtitle, emoji, color]) => (
            <Link
              to="/products"
              key={title}
              className="group border border-[#dfd7c3] bg-[#FFFDF7] p-4 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div
                style={{ backgroundColor: color }}
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-5xl shadow-inner transition group-hover:scale-105"
              >
                {emoji}
              </div>

              <h3 className="mt-4 font-serif text-lg font-bold text-[#103F2C]">
                {title}
              </h3>

              <p className="mt-1 text-[9px] text-[#7b847d]">
                {subtitle}
              </p>

            </Link>
          ))}

        </div>
      </section>


      {/* PRODUCTS */}

      <section
        id="products"
        className="bg-[#FFFDF7] px-5 py-20 sm:px-8 lg:px-12"
      >

        <div className="mx-auto flex max-w-[1250px] flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <SectionTitle
            eyebrow="Best Sellers"
            title="Loved By Indian Kitchens"
            description="Our most-loved spices, chosen for their purity, aroma and authentic taste."
          />

          <Link
            to="/products"
            className="mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#9D211D] sm:mx-0"
          >
            View All
            <ArrowRight size={14} />
          </Link>

        </div>

        <div className="mx-auto mt-12 max-w-[1250px]">
          <ProductGrid products={products.slice(0, 4)} />
        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="bg-[#EDE6D4] px-5 py-20 sm:px-8 lg:px-12"
      >

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-2">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1200&q=85"
              alt="Indian spices"
              className="h-[430px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 bg-[#103F2C] px-6 py-5 text-white">
              <div className="font-serif text-3xl italic text-[#E7BD42]">
                Maa Ka Tadka
              </div>

              <div className="mt-1 text-[8px] uppercase tracking-[3px] text-white/60">
                Taste of Home
              </div>
            </div>

          </div>


          <div>

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#9D211D]">
              Our Story
            </div>

            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#103F2C] sm:text-5xl">
              More Than A Masala.
              <br />

              <span className="italic text-[#9D211D]">
                It's A Feeling.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#69746c]">
              Maa Tadka was born from a simple thought — the best
              food is the food that tastes like home.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#69746c]">
              We carefully select quality spices and blends to
              bring the authentic aroma and flavour of Indian
              kitchens to every family.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">

              {[
                ["100%", "Pure Ingredients"],
                ["0%", "Added Colours"],
                ["100%", "Authentic Taste"],
                ["24/7", "Customer Care"],
              ].map(([number, text]) => (
                <div
                  key={text}
                  className="border border-[#d7cfb9] bg-[#FFFDF7] p-4"
                >
                  <div className="font-serif text-2xl font-bold text-[#9D211D]">
                    {number}
                  </div>

                  <div className="mt-1 text-[9px] font-semibold text-[#68746d]">
                    {text}
                  </div>
                </div>
              ))}

            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-[#103F2C] px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-white"
            >
              Our Story
              <ArrowRight size={14} />
            </Link>

          </div>

        </div>
      </section>


      {/* EXPORT */}

      <section className="bg-[#103F2C] px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#E7BD42]">
              From India To The World
            </div>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Bringing Indian
              <br />

              <span className="italic text-[#E7BD42]">
                Flavours To Dubai
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              Our vision is to take authentic Indian spices beyond
              borders and make the taste of home available to
              families around the world.
            </p>

            <div className="mt-7 flex gap-4">

              <div className="border border-white/15 bg-white/5 px-5 py-4">
                <div className="text-2xl">
                  🇮🇳
                </div>

                <div className="mt-2 text-[9px] font-bold text-white">
                  Made In India
                </div>
              </div>

              <div className="border border-white/15 bg-white/5 px-5 py-4">
                <div className="text-2xl">
                  🇦🇪
                </div>

                <div className="mt-2 text-[9px] font-bold text-white">
                  Dubai Export
                </div>
              </div>

            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#E7BD42] px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-[#103F2C]"
            >
              Business Enquiry
              <ArrowRight size={14} />
            </Link>

          </div>


          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
              alt="Indian spices export"
              className="h-[350px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 bg-[#FFFDF7] px-6 py-4">
              <div className="font-serif text-xl font-bold text-[#103F2C]">
                Premium Indian Spices
              </div>

              <div className="mt-1 text-[9px] text-[#737c75]">
                Crafted with care
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* NEWSLETTER */}

      <section className="bg-[#F7F3E7] px-5 py-16 sm:px-8">

        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-7 bg-[#EDE6D4] p-8 text-center sm:p-12 lg:flex-row lg:text-left">

          <div>
            <div className="font-serif text-3xl font-bold text-[#103F2C]">
              Stay In The Loop
            </div>

            <p className="mt-2 text-xs text-[#737b74]">
              Recipes, new products and special offers.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md bg-white p-1"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 px-4 text-xs outline-none"
            />

            <button className="bg-[#103F2C] px-5 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}

export default Home;