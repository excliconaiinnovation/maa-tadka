import { useMemo, useState } from "react";
import {
  ChevronDown,
  Filter,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFilter, setMobileFilter] = useState(false);

  const categories = [
    "All",
    "Powder Spices",
    "Blended Masala",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subtitle.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [category, search, sortBy]);

  return (
    <main className="min-h-screen bg-[#F7F3E7]">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#063C2D]">

        <img
          src="/about-us-banner.png"
          alt="Maa Tadka spices"
          className="absolute inset-0 h-full w-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#063C2D] via-[#063C2D]/90 to-[#063C2D]/55" />

        <div className="relative z-10 mx-auto max-w-[1380px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          {/* Breadcrumb */}
          <div className="mb-5 text-[11px] font-medium text-white/60">
            Home
            <span className="mx-2 text-[#E9B83F]">›</span>
            Our Products
          </div>

          <div className="max-w-[700px]">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#E9B83F]" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#E9B83F]">
                Shop Maa Tadka
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-none text-white sm:text-6xl">
              Our Products
            </h1>

            <p className="mt-5 max-w-[600px] text-sm leading-7 text-white/70 sm:text-base">
              Pure spices. Authentic taste. Carefully crafted for
              every Indian kitchen.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORY BAR
      ===================================================== */}
      <section className="border-b border-[#DED7C5] bg-[#FFFDF7]">

        <div className="mx-auto max-w-[1250px] px-5 py-5 sm:px-8 lg:px-0">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-wide transition ${
                    category === item
                      ? "bg-[#103F2C] text-white shadow-sm"
                      : "border border-[#D8D1BF] bg-white text-[#496053] hover:border-[#103F2C]"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>


            {/* Product count */}
            <div className="text-xs text-[#788179]">
              Showing{" "}
              <span className="font-bold text-[#103F2C]">
                {filteredProducts.length}
              </span>{" "}
              products
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCTS AREA
      ===================================================== */}
      <section className="mx-auto max-w-[1300px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        {/* Top controls */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full max-w-[430px]">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A938C]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for your favourite masala..."
              className="h-12 w-full border border-[#D8D1BF] bg-white pl-11 pr-10 text-xs text-[#103F2C] outline-none transition placeholder:text-[#9A9F9A] focus:border-[#103F2C]"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#788179] hover:bg-[#F0EBDD]"
              >
                <X size={15} />
              </button>
            )}

          </div>


          {/* Right controls */}
          <div className="flex items-center gap-3">

            {/* Mobile filter */}
            <button
              onClick={() => setMobileFilter(true)}
              className="inline-flex h-11 items-center gap-2 border border-[#D8D1BF] bg-white px-4 text-[10px] font-bold uppercase tracking-wide text-[#103F2C] lg:hidden"
            >
              <SlidersHorizontal size={15} />
              Filter
            </button>


            {/* Sort */}
            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-11 appearance-none border border-[#D8D1BF] bg-white pl-4 pr-10 text-[10px] font-bold uppercase tracking-wide text-[#103F2C] outline-none"
              >
                <option value="popular">
                  Sort: Popularity
                </option>

                <option value="rating">
                  Sort: Rating
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              />

            </div>


            {/* Grid icon */}
            <button className="hidden h-11 w-11 items-center justify-center bg-[#103F2C] text-white sm:flex">
              <Grid2X2 size={16} />
            </button>

          </div>

        </div>


        {/* =====================================================
            MAIN GRID + SIDEBAR
        ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">


          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block">

            <div className="sticky top-28 border border-[#DED7C5] bg-[#FFFDF7]">

              <div className="border-b border-[#DED7C5] px-5 py-5">
                <div className="flex items-center gap-2">
                  <Filter size={16} />

                  <h3 className="text-xs font-extrabold uppercase tracking-wide">
                    Filter Products
                  </h3>
                </div>
              </div>


              {/* Category */}
              <div className="border-b border-[#DED7C5] p-5">

                <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#103F2C]">
                  Filter by Category
                </h4>

                <div className="space-y-3">

                  {categories.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-xs text-[#637067]"
                    >

                      <input
                        type="radio"
                        name="category"
                        checked={category === item}
                        onChange={() => setCategory(item)}
                        className="h-3.5 w-3.5 accent-[#103F2C]"
                      />

                      <span
                        className={
                          category === item
                            ? "font-bold text-[#103F2C]"
                            : ""
                        }
                      >
                        {item}
                      </span>

                    </label>
                  ))}

                </div>

              </div>


              {/* Price */}
              <div className="border-b border-[#DED7C5] p-5">

                <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#103F2C]">
                  Filter by Price
                </h4>

                <div className="space-y-3">

                  {[
                    "Under ₹80",
                    "₹80 - ₹100",
                    "₹100 - ₹120",
                    "Above ₹120",
                  ].map((price) => (
                    <label
                      key={price}
                      className="flex items-center gap-3 text-xs text-[#68746C]"
                    >
                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 accent-[#103F2C]"
                      />

                      {price}
                    </label>
                  ))}

                </div>

              </div>


              {/* Quality */}
              <div className="p-5">

                <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#103F2C]">
                  Our Promise
                </h4>

                <div className="space-y-3">

                  {[
                    "100% Pure",
                    "No Added Colours",
                    "No Preservatives",
                    "Premium Quality",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#68746C]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F0E8] text-[#103F2C]">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </aside>


          {/* PRODUCT GRID */}
          <div>

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="flex min-h-[350px] flex-col items-center justify-center border border-[#DED7C5] bg-[#FFFDF7] text-center">

                <Search
                  size={35}
                  className="text-[#C5BFAE]"
                />

                <h3 className="mt-5 font-serif text-2xl font-bold text-[#103F2C]">
                  No Products Found
                </h3>

                <p className="mt-2 text-xs text-[#788179]">
                  Try another search or category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="mt-5 bg-[#103F2C] px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-white"
                >
                  View All Products
                </button>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM QUALITY STRIP
      ===================================================== */}
      <section className="border-t border-[#DDD6C4] bg-[#FFFDF7]">

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-[#DDD6C4] sm:grid-cols-4">

          <div className="px-5 py-7 text-center">
            <div className="text-lg">🌿</div>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#103F2C]">
              100% Pure
            </p>
          </div>

          <div className="px-5 py-7 text-center">
            <div className="text-lg">✓</div>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#103F2C]">
              No Preservatives
            </p>
          </div>

          <div className="px-5 py-7 text-center">
            <div className="text-lg">✦</div>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#103F2C]">
              Premium Quality
            </p>
          </div>

          <div className="px-5 py-7 text-center">
            <div className="text-lg">🚚</div>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#103F2C]">
              Safe Delivery
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          MOBILE FILTER DRAWER
      ===================================================== */}
      {mobileFilter && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* Overlay */}
          <button
            onClick={() => setMobileFilter(false)}
            className="absolute inset-0 bg-black/50"
            aria-label="Close filter"
          />

          {/* Drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-[#FFFDF7]">

            <div className="flex items-center justify-between border-b border-[#DED7C5] px-6 py-5">

              <h3 className="font-serif text-xl font-bold text-[#103F2C]">
                Filter Products
              </h3>

              <button
                onClick={() => setMobileFilter(false)}
                className="rounded-full bg-[#F0EBDD] p-2"
              >
                <X size={18} />
              </button>

            </div>


            <div className="p-6">

              <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[2px]">
                Category
              </h4>

              <div className="space-y-3">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setMobileFilter(false);
                    }}
                    className={`block w-full border px-4 py-3 text-left text-xs ${
                      category === item
                        ? "border-[#103F2C] bg-[#103F2C] font-bold text-white"
                        : "border-[#DDD6C4] bg-white text-[#526359]"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default Products;