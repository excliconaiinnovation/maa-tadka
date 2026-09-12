import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { products } from "../data/products";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#103F2C]">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="mt-5 inline-block bg-[#103F2C] px-6 py-3 text-xs font-bold text-white"
          >
            Back To Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#F7F3E7] px-5 py-16 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-[1150px]">

        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase text-[#103F2C]"
        >
          <ArrowLeft size={14} />
          Back To Products
        </Link>

        <div className="grid gap-10 bg-[#FFFDF7] p-5 sm:p-8 lg:grid-cols-2">

          <div className="aspect-square overflow-hidden bg-[#eee9d9]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">

            <div className="text-[9px] font-bold uppercase tracking-[3px] text-[#9D211D]">
              {product.category}
            </div>

            <h1 className="mt-3 font-serif text-4xl font-bold text-[#103F2C] sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-2 text-sm text-[#7b837c]">
              {product.subtitle}
            </p>

            <div className="mt-5 flex items-center gap-2">

              <div className="flex">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    fill="#D9A928"
                    className="text-[#D9A928]"
                  />
                ))}
              </div>

              <span className="text-xs text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-7">

              <span className="text-3xl font-bold text-[#103F2C]">
                ₹{product.price}
              </span>

              <span className="ml-3 text-sm text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>

            </div>

            <p className="mt-6 text-sm leading-7 text-[#68736c]">
              {product.description}
            </p>

            <div className="mt-7 border-y border-[#e5dfcf] py-5">
              <div className="text-[10px] font-bold uppercase tracking-wide text-[#103F2C]">
                Quantity
              </div>

              <div className="mt-3 flex items-center gap-4">

                <div className="flex border border-[#d9d2c0]">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    className="p-3"
                  >
                    <Minus size={13} />
                  </button>

                  <span className="flex w-10 items-center justify-center text-sm font-bold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <span className="text-xs text-gray-500">
                  {product.weight} each
                </span>

              </div>
            </div>

            <button className="mt-7 flex items-center justify-center gap-3 bg-[#103F2C] px-7 py-4 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#9D211D]">
              <ShoppingBag size={17} />
              Add To Cart
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;