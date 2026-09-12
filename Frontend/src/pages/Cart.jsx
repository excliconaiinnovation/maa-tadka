import {
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(2);

  const price = 75;
  const subtotal = price * quantity;
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <main className="bg-[#F7F3E7] px-5 py-20 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-[1050px]">

        <div className="mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[4px] text-[#9D211D]">
            Your Shopping Bag
          </div>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#103F2C]">
            Shopping Cart
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

          <div className="bg-white p-5 sm:p-7">

            <div className="flex gap-5 border-b border-[#e5dfce] pb-6">

              <div className="flex h-28 w-28 items-center justify-center bg-[#eee9d9]">
                <span className="text-5xl">🌾</span>
              </div>

              <div className="flex-1">

                <h2 className="font-serif text-xl font-bold text-[#103F2C]">
                  Haldi Powder
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Pure Turmeric • 100g
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <div className="text-lg font-bold text-[#103F2C]">
                    ₹{price}
                  </div>

                  <div className="flex border border-[#ddd6c5]">

                    <button
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      className="p-2"
                    >
                      <Minus size={13} />
                    </button>

                    <span className="flex w-8 items-center justify-center text-xs">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2"
                    >
                      <Plus size={13} />
                    </button>

                  </div>

                </div>

              </div>
            </div>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase text-[#9D211D]"
            >
              ← Continue Shopping
            </Link>

          </div>


          <div className="h-fit bg-[#103F2C] p-7 text-white">

            <h2 className="font-serif text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-7 space-y-4 border-b border-white/15 pb-5 text-xs">

              <div className="flex justify-between">
                <span className="text-white/60">
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Shipping
                </span>

                <span>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>

            </div>

            <div className="mt-5 flex justify-between">

              <span className="font-bold">
                Total
              </span>

              <span className="font-serif text-2xl font-bold text-[#E7BD42]">
                ₹{total}
              </span>

            </div>

            <button className="mt-7 flex w-full items-center justify-center gap-2 bg-[#E7BD42] py-4 text-[10px] font-bold uppercase tracking-wide text-[#103F2C]">
              <ShoppingBag size={14} />
              Checkout
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Cart;