import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeBrand, setActiveBrand] = useState("All");
  const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand)))];

  const filtered = useMemo(
    () =>
      activeBrand === "All"
        ? products
        : products.filter((p) => p.brand === activeBrand),
    [activeBrand]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          All Products
        </h1>
        <p className="mt-3 max-w-xl text-slate-soft">
          Every flagship we stock, in one place. Filter by brand to narrow
          things down.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setActiveBrand(brand)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeBrand === brand
                ? "border-brand bg-brand text-white"
                : "border-ice bg-white text-navy/70 hover:border-brand/40 hover:text-brand"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-slate-soft">
          No products found for this brand.
        </p>
      )}
    </div>
  );
};

export default Products;
