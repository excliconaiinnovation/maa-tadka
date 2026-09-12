import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden border border-[#e5dfce] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {product.badge && (
        <span className="absolute left-4 top-4 z-10 bg-[#103F2C] px-3 py-1.5 text-[8px] font-bold tracking-wider text-white">
          {product.badge}
        </span>
      )}

      <button
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#385244] shadow-md hover:text-[#9D211D]"
        aria-label="Add to wishlist"
      >
        <Heart size={15} />
      </button>

      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-[#f1eddf]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star
              key={item}
              size={11}
              fill="#D9A928"
              className="text-[#D9A928]"
            />
          ))}

          <span className="ml-1 text-[9px] text-[#89918b]">
            ({product.reviews})
          </span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 font-serif text-xl font-bold text-[#103F2C] hover:text-[#9D211D]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-[10px] text-[#7d847e]">
          {product.subtitle}
        </p>

        <div className="mt-5 flex items-end justify-between">

          <div>
            <span className="text-lg font-bold text-[#103F2C]">
              ₹{product.price}
            </span>

            <span className="ml-2 text-[10px] text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>

            <div className="mt-1 text-[9px] text-gray-500">
              {product.weight}
            </div>
          </div>

          <button className="flex items-center gap-1.5 bg-[#103F2C] px-4 py-2.5 text-[9px] font-bold uppercase tracking-wide text-white transition hover:bg-[#9D211D]">
            <ShoppingBag size={13} />
            Add
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;