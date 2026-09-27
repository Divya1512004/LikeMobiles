
// import { useState } from "react";
// import { Link, Navigate, useParams } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   BatteryCharging,
//   Camera,
//   Check,
//   ChevronRight,
//   Cpu,
//   Heart,
//   Minus,
//   Plus,
//   ShieldCheck,
//   ShoppingBag,
//   Smartphone,
//   Sparkles,
//   Star,
//   Truck,
//   Zap,
// } from "lucide-react";

// import { getProductById, products } from "../data/products";
// import ProductCard from "../components/ProductCard";

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();

//   const product = id ? getProductById(id) : undefined;

//   const [activeColor, setActiveColor] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [liked, setLiked] = useState(false);
//   const [added, setAdded] = useState(false);

//   if (!product) {
//     return <Navigate to="/products" replace />;
//   }

//   const related = products
//     .filter((p) => p.id !== product.id)
//     .slice(0, 3);

//   const increaseQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decreaseQuantity = () => {
//     setQuantity((prev) => Math.max(1, prev - 1));
//   };

//   const handleAddToCart = () => {
//     setAdded(true);

//     setTimeout(() => {
//       setAdded(false);
//     }, 2200);
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-navy">
//       {/* =========================================================
//           BACKGROUND DECORATION
//       ========================================================= */}
//       <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
//         <motion.div
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl"
//         />

//         <motion.div
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"
//         />
//       </div>

//       <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
//         {/* =========================================================
//             BREADCRUMB
//         ========================================================= */}
//         <motion.div
//           initial={{ opacity: 0, y: -15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-6 flex items-center justify-between"
//         >
//           <div className="flex items-center gap-2 text-sm">
//             <Link
//               to="/products"
//               className="group flex items-center gap-2 font-medium text-slate-500 transition-colors hover:text-brand"
//             >
//               <ArrowLeft
//                 size={16}
//                 className="transition-transform group-hover:-translate-x-1"
//               />
//               Products
//             </Link>

//             <ChevronRight size={15} className="text-slate-300" />

//             <span className="max-w-[180px] truncate text-slate-400">
//               {product.name}
//             </span>
//           </div>

//           <button
//             onClick={() => setLiked((prev) => !prev)}
//             aria-label="Add to wishlist"
//             className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
//               liked
//                 ? "border-red-200 bg-red-50 text-red-500"
//                 : "border-slate-200 bg-white text-slate-500 hover:border-brand hover:text-brand"
//             }`}
//           >
//             <Heart
//               size={19}
//               fill={liked ? "currentColor" : "none"}
//             />
//           </button>
//         </motion.div>

//         {/* =========================================================
//             MAIN PRODUCT SECTION
//         ========================================================= */}
//         <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
//           {/* =====================================================
//               PRODUCT IMAGE
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.7,
//               ease: "easeOut",
//             }}
//           >
//             <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 shadow-[0_25px_70px_rgba(37,99,235,0.10)] sm:p-8">
//               {/* Decorative circles */}
//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 25,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-blue-200/60"
//               />

//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-indigo-200/50"
//               />

//               {/* Premium badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-brand shadow-lg backdrop-blur sm:left-8 sm:top-8"
//               >
//                 <Sparkles size={14} />
//                 Premium Choice
//               </motion.div>

//               {/* Product image */}
//               <motion.div
//                 layoutId={`product-image-${product.id}`}
//                 className="relative flex min-h-[390px] items-center justify-center sm:min-h-[520px]"
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -14, 0],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="relative z-10 flex h-[300px] w-[250px] items-center justify-center sm:h-[400px] sm:w-[340px]"
//                 >
//                   <motion.img
//                     src={product.image}
//                     alt={product.name}
//                     initial={{
//                       opacity: 0,
//                       scale: 0.65,
//                       rotate: -8,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       rotate: 0,
//                     }}
//                     transition={{
//                       duration: 0.8,
//                       delay: 0.15,
//                       type: "spring",
//                       stiffness: 100,
//                     }}
//                     className="h-full w-full object-contain drop-shadow-[0_30px_30px_rgba(15,23,42,0.20)]"
//                   />
//                 </motion.div>

//                 {/* Image glow */}
//                 <div className="absolute h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
//               </motion.div>

//               {/* Bottom mini information */}
//               <div className="relative z-10 grid grid-cols-3 gap-3">
//                 {[
//                   {
//                     icon: ShieldCheck,
//                     title: "Warranty",
//                     text: "Official",
//                   },
//                   {
//                     icon: Truck,
//                     title: "Delivery",
//                     text: "Fast",
//                   },
//                   {
//                     icon: Zap,
//                     title: "Charging",
//                     text: "Fast",
//                   },
//                 ].map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <motion.div
//                       key={item.title}
//                       initial={{
//                         opacity: 0,
//                         y: 20,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       transition={{
//                         delay: 0.5 + index * 0.1,
//                       }}
//                       className="rounded-2xl border border-white/80 bg-white/80 p-3 text-center backdrop-blur"
//                     >
//                       <Icon
//                         size={17}
//                         className="mx-auto text-brand"
//                       />

//                       <p className="mt-1 text-[10px] font-semibold text-slate-400">
//                         {item.title}
//                       </p>

//                       <p className="text-xs font-bold text-navy">
//                         {item.text}
//                       </p>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>

//           {/* =====================================================
//               PRODUCT INFORMATION
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15,
//               ease: "easeOut",
//             }}
//             className="flex flex-col justify-center"
//           >
//             {/* Brand */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="flex items-center gap-3"
//             >
//               <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
//                 {product.brand}
//               </span>

//               <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
//                 <Star
//                   size={15}
//                   className="fill-yellow-400 text-yellow-400"
//                 />
//                 Premium
//               </span>
//             </motion.div>

//             {/* Title */}
//             <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
//               {product.name}
//             </h1>

//             <p className="mt-3 text-base font-medium text-slate-500 sm:text-lg">
//               {product.tagline}
//             </p>

//             {/* Price */}
//             <div className="mt-7">
//               <p className="text-sm font-medium text-slate-400">
//                 Starting from
//               </p>

//               <div className="mt-1 flex items-end gap-3">
//                 <span className="text-3xl font-black text-brand sm:text-4xl">
//                   ₹{product.price.toLocaleString("en-IN")}
//                 </span>

//                 <span className="mb-1 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
//                   In Stock
//                 </span>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
//               {product.description}
//             </p>

//             {/* =================================================
//                 COLOR SELECTION
//             ================================================= */}
//             <div className="mt-7">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-bold text-navy">
//                   Choose your color
//                 </h3>

//                 <span className="text-xs font-medium text-slate-400">
//                   {product.colors.length} options
//                 </span>
//               </div>

//               <div className="mt-4 flex items-center gap-3">
//                 {product.colors.map((color, index) => (
//                   <motion.button
//                     key={`${color}-${index}`}
//                     whileHover={{ scale: 1.12 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setActiveColor(index)}
//                     aria-label={`Color option ${index + 1}`}
//                     className={`relative h-11 w-11 rounded-full border-2 p-1 ${
//                       activeColor === index
//                         ? "border-brand"
//                         : "border-slate-200"
//                     }`}
//                   >
//                     <span
//                       className="block h-full w-full rounded-full"
//                       style={{
//                         backgroundColor: color,
//                         boxShadow:
//                           "0 0 0 1px rgba(15,23,42,0.08) inset",
//                       }}
//                     />

//                     {activeColor === index && (
//                       <motion.span
//                         layoutId="selected-color"
//                         className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white shadow"
//                       >
//                         <Check size={12} strokeWidth={3} />
//                       </motion.span>
//                     )}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* =================================================
//                 QUANTITY + CART
//             ================================================= */}
//             <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//               <div className="flex h-14 items-center justify-between rounded-full border border-slate-200 bg-white px-2 shadow-sm sm:w-36">
//                 <button
//                   onClick={decreaseQuantity}
//                   className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-brand"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={17} />
//                 </button>

//                 <span className="text-sm font-bold text-navy">
//                   {quantity}
//                 </span>

//                 <button
//                   onClick={increaseQuantity}
//                   className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-brand"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={17} />
//                 </button>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={handleAddToCart}
//                 className="relative flex h-14 flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-6 font-bold text-white shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition hover:bg-blue-700"
//               >
//                 <AnimatePresence mode="wait">
//                   {added ? (
//                     <motion.span
//                       key="added"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="flex items-center gap-2"
//                     >
//                       <Check size={19} />
//                       Added to Cart
//                     </motion.span>
//                   ) : (
//                     <motion.span
//                       key="cart"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="flex items-center gap-2"
//                     >
//                       <ShoppingBag size={19} />
//                       Add to Cart
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.button>
//             </div>

//             {/* Buy Now */}
//             <motion.button
//               whileHover={{
//                 scale: 1.02,
//               }}
//               whileTap={{
//                 scale: 0.97,
//               }}
//               className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-navy bg-white font-bold text-navy transition hover:border-brand hover:text-brand"
//             >
//               Buy Now
//               <ArrowRight size={18} />
//             </motion.button>

//             {/* =================================================
//                 TRUST INFO
//             ================================================= */}
//             <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
//               {[
//                 {
//                   icon: ShieldCheck,
//                   title: "Secure",
//                   text: "Checkout",
//                 },
//                 {
//                   icon: Truck,
//                   title: "Fast",
//                   text: "Delivery",
//                 },
//                 {
//                   icon: Smartphone,
//                   title: "Original",
//                   text: "Product",
//                 },
//                 {
//                   icon: Check,
//                   title: "Quality",
//                   text: "Checked",
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center"
//                   >
//                     <Icon
//                       size={18}
//                       className="mx-auto text-brand"
//                     />

//                     <p className="mt-2 text-[11px] font-bold text-navy">
//                       {item.title}
//                     </p>

//                     <p className="text-[10px] text-slate-400">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>

//         {/* =========================================================
//             KEY FEATURES
//         ========================================================= */}
//         <section className="mt-16 sm:mt-24">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-sm font-bold uppercase tracking-widest text-brand">
//               Highlights
//             </span>

//             <h2 className="mt-2 text-2xl font-black text-navy sm:text-3xl">
//               Built for everyday excellence
//             </h2>
//           </motion.div>

//           <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 icon: Smartphone,
//                 title: "Display",
//                 value: product.specs.display,
//               },
//               {
//                 icon: Cpu,
//                 title: "Performance",
//                 value: product.specs.chipset,
//               },
//               {
//                 icon: Camera,
//                 title: "Camera",
//                 value: product.specs.camera,
//               },
//               {
//                 icon: BatteryCharging,
//                 title: "Battery",
//                 value: product.specs.battery,
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{
//                     opacity: 0,
//                     y: 35,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.2,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.08,
//                   }}
//                   whileHover={{
//                     y: -6,
//                   }}
//                   className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100/50"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-brand transition group-hover:bg-brand group-hover:text-white">
//                     <Icon size={21} />
//                   </div>

//                   <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
//                     {item.title}
//                   </p>

//                   <p className="mt-2 text-sm font-bold leading-6 text-navy">
//                     {item.value}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* =========================================================
//             SPECIFICATIONS
//         ========================================================= */}
//         <section className="mt-16 sm:mt-24">
//           <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
//             <motion.div
//               initial={{ opacity: 0, x: -25 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="rounded-[28px] bg-navy p-7 text-white sm:p-9"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//                 <Sparkles size={23} />
//               </div>

//               <h2 className="mt-6 text-2xl font-black sm:text-3xl">
//                 Specifications
//               </h2>

//               <p className="mt-3 text-sm leading-6 text-white/60">
//                 Everything you need to know about this device before
//                 making your choice.
//               </p>

//               <div className="mt-8 flex items-center gap-3">
//                 <div className="h-2 w-16 rounded-full bg-blue-500" />
//                 <div className="h-2 w-8 rounded-full bg-white/20" />
//                 <div className="h-2 w-4 rounded-full bg-white/20" />
//               </div>
//             </motion.div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {Object.entries(product.specs).map(
//                 ([key, value], index) => (
//                   <motion.div
//                     key={key}
//                     initial={{
//                       opacity: 0,
//                       x: 20,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 0.45,
//                       delay: index * 0.08,
//                     }}
//                     className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
//                   >
//                     <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
//                       {key}
//                     </p>

//                     <p className="mt-2 text-sm font-bold leading-6 text-navy">
//                       {value}
//                     </p>
//                   </motion.div>
//                 )
//               )}
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             RELATED PRODUCTS
//         ========================================================= */}
//         <section className="mt-16 pb-16 sm:mt-24">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="flex items-end justify-between gap-4"
//           >
//             <div>
//               <span className="text-sm font-bold uppercase tracking-widest text-brand">
//                 More to explore
//               </span>

//               <h2 className="mt-2 text-2xl font-black text-navy sm:text-3xl">
//                 You may also like
//               </h2>
//             </div>

//             <Link
//               to="/products"
//               className="group hidden items-center gap-2 text-sm font-bold text-brand sm:flex"
//             >
//               View all
//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>
//           </motion.div>

//           <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {related.map((relatedProduct, index) => (
//               <motion.div
//                 key={relatedProduct.id}
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <ProductCard
//                   product={relatedProduct}
//                   index={index}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* =========================================================
//           MOBILE BOTTOM PURCHASE BAR
//       ========================================================= */}
//       <motion.div
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{
//           duration: 0.5,
//           delay: 0.8,
//         }}
//         className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
//       >
//         <div className="flex items-center gap-3">
//           <div className="min-w-0 flex-1">
//             <p className="truncate text-xs font-medium text-slate-400">
//               {product.name}
//             </p>

//             <p className="text-lg font-black text-brand">
//               ₹{product.price.toLocaleString("en-IN")}
//             </p>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="flex h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-bold text-white shadow-lg shadow-blue-200"
//           >
//             <ShoppingBag size={17} />
//             {added ? "Added" : "Add"}
//           </button>
//         </div>
//       </motion.div>
//     </main>
//   );
// };

// export default ProductDetails;


import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  ChevronRight,
  Cpu,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";

import { getProductById, products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = id ? getProductById(id) : undefined;

  const [activeColor, setActiveColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2200);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-navy pb-24 md:pb-0">

      {/* =========================================================
          BACKGROUND ANIMATION
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-10 lg:px-8">

        {/* =========================================================
            BREADCRUMB
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Link
              to="/products"
              className="group flex items-center gap-1.5 font-semibold text-slate-500 transition hover:text-brand"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              Products
            </Link>

            <ChevronRight
              size={14}
              className="text-slate-300"
            />

            <span className="max-w-[150px] truncate text-slate-400">
              {product.name}
            </span>
          </div>

          <button
            onClick={() => setLiked((prev) => !prev)}
            aria-label="Wishlist"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
              liked
                ? "border-red-200 bg-red-50 text-red-500"
                : "border-slate-200 bg-white text-slate-500 hover:border-brand hover:text-brand"
            }`}
          >
            <Heart
              size={17}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
        </motion.div>

        {/* =========================================================
            MAIN PRODUCT
        ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* =====================================================
              IMAGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-[26px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.10)] sm:p-8">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-blue-200/60"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-indigo-200/50"
              />

              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold text-brand shadow-lg backdrop-blur sm:left-8 sm:top-8 sm:text-xs">
                <Sparkles size={13} />
                Premium Choice
              </div>

              <motion.div
                layoutId={`product-image-${product.id}`}
                className="relative flex min-h-[350px] items-center justify-center sm:min-h-[520px]"
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 h-[280px] w-[220px] sm:h-[400px] sm:w-[340px]"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: -8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                    }}
                    className="h-full w-full object-contain drop-shadow-[0_25px_25px_rgba(15,23,42,0.20)]"
                  />
                </motion.div>

                <div className="absolute h-44 w-44 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
              </motion.div>

              {/* Image bottom info */}
              <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Warranty",
                    text: "Official",
                  },
                  {
                    icon: Truck,
                    title: "Delivery",
                    text: "Fast",
                  },
                  {
                    icon: Zap,
                    title: "Charging",
                    text: "Fast",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                      }}
                      className="rounded-xl border border-white/80 bg-white/85 p-2.5 text-center backdrop-blur sm:rounded-2xl sm:p-3"
                    >
                      <Icon
                        size={16}
                        className="mx-auto text-brand"
                      />

                      <p className="mt-1 text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                        {item.title}
                      </p>

                      <p className="text-[10px] font-bold text-navy sm:text-xs">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              DETAILS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand sm:text-xs">
                {product.brand}
              </span>

              <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
                <Star
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
                Premium
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-2 text-sm font-medium text-slate-500 sm:text-lg">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="mt-5">
              <p className="text-xs font-medium text-slate-400">
                Starting from
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-3xl font-black text-brand sm:text-4xl">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-bold text-green-600">
                  In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 text-xs leading-6 text-slate-600 sm:text-base sm:leading-7">
              {product.description}
            </p>

            {/* =================================================
                COLORS
            ================================================= */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-navy sm:text-sm">
                  Choose your color
                </h3>

                <span className="text-[10px] font-medium text-slate-400">
                  {product.colors.length} options
                </span>
              </div>

              <div className="mt-3 flex gap-3">
                {product.colors.map((color, index) => (
                  <motion.button
                    key={`${color}-${index}`}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setActiveColor(index)}
                    aria-label={`Color ${index + 1}`}
                    className={`relative h-10 w-10 rounded-full border-2 p-1 transition ${
                      activeColor === index
                        ? "border-brand"
                        : "border-slate-200"
                    }`}
                  >
                    <span
                      className="block h-full w-full rounded-full"
                      style={{
                        backgroundColor: color,
                      }}
                    />

                    {activeColor === index && (
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-white">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* =================================================
                PURCHASE SECTION
            ================================================= */}
            <div className="mt-7 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-white p-3 sm:p-4">

              {/* Quantity */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-bold text-navy">
                    Quantity
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Select quantity
                  </p>
                </div>

                <div className="flex h-11 items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={decreaseQuantity}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-brand"
                  >
                    <Minus size={15} />
                  </motion.button>

                  <span className="w-8 text-center text-sm font-bold text-navy">
                    {quantity}
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={increaseQuantity}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-brand"
                  >
                    <Plus size={15} />
                  </motion.button>

                </div>
              </div>

              {/* ADD TO CART */}
              <motion.button
                whileHover={{
                  scale: 1.015,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={handleAddToCart}
                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.30)] transition-all hover:from-blue-700 hover:to-blue-600 sm:h-15 sm:text-base"
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="added"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      className="flex items-center gap-2"
                    >
                      <Check size={20} strokeWidth={2.5} />
                      Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag size={20} />
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* BUY NOW */}
              <motion.button
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white text-sm font-bold text-navy transition-all hover:border-brand hover:text-brand sm:text-base"
              >
                Buy Now
                <ArrowRight size={18} />
              </motion.button>
            </div>

            {/* =================================================
                TRUST FEATURES
            ================================================= */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure",
                  text: "Checkout",
                },
                {
                  icon: Truck,
                  title: "Fast",
                  text: "Delivery",
                },
                {
                  icon: Smartphone,
                  title: "Original",
                  text: "Product",
                },
                {
                  icon: Check,
                  title: "Quality",
                  text: "Checked",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                  >
                    <Icon
                      size={16}
                      className="mx-auto text-brand"
                    />

                    <p className="mt-1.5 text-[10px] font-bold text-navy">
                      {item.title}
                    </p>

                    <p className="text-[9px] text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            HIGHLIGHTS
        ========================================================= */}
        <section className="mt-14 sm:mt-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Highlights
            </span>

            <h2 className="mt-2 text-2xl font-black text-navy sm:text-3xl">
              Built for everyday excellence
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Smartphone,
                title: "Display",
                value: product.specs.display,
              },
              {
                icon: Cpu,
                title: "Performance",
                value: product.specs.chipset,
              },
              {
                icon: Camera,
                title: "Camera",
                value: product.specs.camera,
              },
              {
                icon: BatteryCharging,
                title: "Battery",
                value: product.specs.battery,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm font-bold leading-6 text-navy">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            SPECIFICATIONS
        ========================================================= */}
        <section className="mt-14 sm:mt-24">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-[26px] bg-navy p-7 text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Sparkles size={21} />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Specifications
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Everything you need to know about this device.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(product.specs).map(
                ([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {key}
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-navy">
                      {value}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            RELATED PRODUCTS
        ========================================================= */}
        <section className="mt-14 pb-10 sm:mt-24">

          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                More to explore
              </span>

              <h2 className="mt-2 text-2xl font-black text-navy sm:text-3xl">
                You may also like
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden items-center gap-2 text-sm font-bold text-brand sm:flex"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <ProductCard
                  product={relatedProduct}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* =========================================================
          MOBILE FIXED CART BAR
      ========================================================= */}
      <motion.div
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_35px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden"
      >
        <div className="mx-auto flex max-w-lg items-center gap-3">

          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-medium text-slate-400">
              {product.name}
            </p>

            <p className="text-lg font-black text-brand">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          <motion.button
            whileTap={{
              scale: 0.94,
            }}
            onClick={handleAddToCart}
            className="flex h-12 min-w-[110px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 text-sm font-bold text-white shadow-lg shadow-blue-200"
          >
            <ShoppingBag size={17} />

            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Added
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
};

export default ProductDetails;