import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../types/product";

interface Props {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <Link
        to={`/products/${product.id}`}
        className="group block overflow-hidden rounded-xl2 border border-ice bg-white shadow-card transition-shadow hover:shadow-cardHover"
      >
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-ice">
          <motion.img
            layoutId={`product-image-${product.id}`}
            src={product.image}
            alt={product.name}
            className="h-4/5 w-4/5 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white">
            {product.brand}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-navy">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-slate-soft">{product.tagline}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-display text-lg font-bold text-brand">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-sm font-medium text-navy/60 transition-transform group-hover:translate-x-1">
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
