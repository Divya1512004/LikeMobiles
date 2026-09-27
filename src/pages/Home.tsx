
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Truck,
//   Smartphone,
//   Sparkles,
// } from "lucide-react";

// import { products } from "../data/products";
// import ProductCard from "../components/ProductCard";

// const brands = [
//   "Oppo",
//   "Vivo",
//   "Samsung",
//   "Apple",
//   "Motorola",
//   "Xiaomi",
// ];

// const Home = () => {
//   const featured = products.slice(0, 3);

//   return (
//     <div className="overflow-hidden bg-white">

//       {/* =====================================================
//           HERO SECTION
//       ====================================================== */}
//       <section
//         className="
//           relative
//           h-[420px]
//           overflow-hidden

//           sm:h-[560px]
//           lg:h-[620px]
//         "
//       >

//         {/* =================================================
//             BACKGROUND IMAGE
//         ================================================== */}
//         <motion.div
//           initial={{
//             scale: 1.03,
//           }}
//           animate={{
//             scale: [1.03, 1.06, 1.03],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-0"
//         >
//           <div
//             className="
//               absolute
//               inset-0
//               bg-cover
//               bg-center
//               bg-no-repeat
//             "
//             style={{
//               backgroundImage: "url('/bg.png')",
//             }}
//           />
//         </motion.div>

//         {/* =================================================
//             DARK GRADIENT
//         ================================================== */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             bg-gradient-to-r
//             from-black/35
//             via-purple-950/35
//             to-purple-950/55
//           "
//         />

//         {/* =================================================
//             BOTTOM GRADIENT
//         ================================================== */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-x-0
//             bottom-0
//             h-24
//             bg-gradient-to-t
//             from-black/50
//             to-transparent
//           "
//         />

//         {/* =================================================
//             DECORATIVE GLOW
//         ================================================== */}
//         <motion.div
//           animate={{
//             opacity: [0.12, 0.25, 0.12],
//             scale: [1, 1.12, 1],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             pointer-events-none
//             absolute
//             right-[8%]
//             top-[15%]
//             h-56
//             w-56
//             rounded-full
//             bg-purple-500/25
//             blur-3xl

//             sm:h-72
//             sm:w-72
//           "
//         />

//         {/* =================================================
//             HERO CONTENT
//         ================================================== */}
//         <div
//           className="
//             relative
//             z-10
//             mx-auto
//             flex
//             h-full
//             max-w-7xl
//             items-center
//             px-5
//             py-5

//             sm:px-8
//             sm:py-12

//             lg:px-10
//           "
//         >

//           {/* =================================================
//               HERO TEXT
//           ================================================== */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -30,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//             }}
//             className="
//               w-full
//               max-w-[300px]

//               sm:max-w-xl

//               lg:max-w-2xl
//             "
//           >

//             {/* =================================================
//                 TOP LABEL
//             ================================================== */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 12,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.15,
//               }}
//               className="
//                 inline-flex
//                 items-center
//                 gap-1.5
//                 rounded-full
//                 border
//                 border-white/25
//                 bg-white/10
//                 px-3
//                 py-1.5
//                 text-[9px]
//                 font-semibold
//                 text-white
//                 backdrop-blur-md

//                 sm:gap-2
//                 sm:px-4
//                 sm:py-2
//                 sm:text-xs
//               "
//             >
//               <Sparkles
//                 size={11}
//                 className="text-fuchsia-300 sm:h-[14px] sm:w-[14px]"
//               />

//               New arrivals every week
//             </motion.div>

//             {/* =================================================
//                 HEADING
//             ================================================== */}
//             <motion.h1
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//               }}
//               className="
//                 mt-4
//                 text-[30px]
//                 font-black
//                 leading-[0.98]
//                 tracking-tight
//                 text-white

//                 sm:mt-6
//                 sm:text-5xl
//                 sm:leading-[1.02]

//                 lg:text-6xl
//               "
//             >
//               Discover your

//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-purple-300
//                   via-fuchsia-300
//                   to-blue-300
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 perfect mobile.
//               </span>
//             </motion.h1>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================== */}
//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.4,
//               }}
//               className="
//                 mt-4
//                 max-w-[295px]
//                 text-[10px]
//                 leading-[1.55]
//                 text-white/85

//                 sm:mt-5
//                 sm:max-w-xl
//                 sm:text-base
//                 sm:leading-6
//               "
//             >
//               Explore the latest smartphones from Oppo, Vivo,
//               Samsung, Apple, Motorola and Xiaomi — beautifully
//               curated and delivered with genuine warranty.
//             </motion.p>

//             {/* =================================================
//                 BUTTONS
//             ================================================== */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.5,
//               }}
//               className="
//                 mt-5
//                 flex
//                 flex-wrap
//                 gap-2

//                 sm:mt-6
//                 sm:gap-3
//               "
//             >

//               {/* Browse Products */}
//               <Link to="/products">
//                 <motion.div
//                   whileHover={{
//                     scale: 1.04,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="
//                     flex
//                     items-center
//                     gap-1
//                     rounded-full
//                     bg-gradient-to-r
//                     from-purple-500
//                     via-violet-500
//                     to-fuchsia-500
//                     px-4
//                     py-2.5
//                     text-[9px]
//                     font-bold
//                     text-white
//                     shadow-lg
//                     shadow-purple-900/30

//                     sm:gap-2
//                     sm:px-6
//                     sm:py-3
//                     sm:text-xs
//                   "
//                 >
//                   Browse Products

//                   <ArrowRight
//                     size={12}
//                     className="sm:h-[15px] sm:w-[15px]"
//                   />
//                 </motion.div>
//               </Link>

//               {/* Our Story */}
//               <Link to="/about">
//                 <motion.div
//                   whileHover={{
//                     scale: 1.04,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="
//                     rounded-full
//                     border
//                     border-white/30
//                     bg-white/10
//                     px-4
//                     py-2.5
//                     text-[9px]
//                     font-semibold
//                     text-white
//                     backdrop-blur-md

//                     sm:px-6
//                     sm:py-3
//                     sm:text-xs
//                   "
//                 >
//                   Our Story
//                 </motion.div>
//               </Link>

//             </motion.div>

//             {/* =================================================
//                 TRUST FEATURES
//             ================================================== */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.65,
//               }}
//               className="
//                 mt-5
//                 flex
//                 flex-wrap
//                 gap-x-4
//                 gap-y-2

//                 sm:mt-7
//                 sm:gap-x-6
//                 sm:gap-y-3
//               "
//             >

//               {/* Warranty */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-1
//                   text-[8px]
//                   font-medium
//                   text-white/80

//                   sm:gap-1.5
//                   sm:text-xs
//                 "
//               >
//                 <ShieldCheck
//                   size={12}
//                   className="text-purple-300 sm:h-[16px] sm:w-[16px]"
//                 />

//                 Genuine Warranty
//               </div>

//               {/* Delivery */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-1
//                   text-[8px]
//                   font-medium
//                   text-white/80

//                   sm:gap-1.5
//                   sm:text-xs
//                 "
//               >
//                 <Truck
//                   size={12}
//                   className="text-blue-300 sm:h-[16px] sm:w-[16px]"
//                 />

//                 Fast Delivery
//               </div>

//               {/* Latest Models */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-1
//                   text-[8px]
//                   font-medium
//                   text-white/80

//                   sm:gap-1.5
//                   sm:text-xs
//                 "
//               >
//                 <Smartphone
//                   size={12}
//                   className="text-fuchsia-300 sm:h-[16px] sm:w-[16px]"
//                 />

//                 Latest Models
//               </div>

//             </motion.div>

//           </motion.div>

//         </div>

//       </section>

//       {/* =====================================================
//           BRAND STRIP
//       ====================================================== */}
//       <section
//         className="
//           border-b
//           border-purple-100
//           bg-white
//           py-6

//           sm:py-8
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-7xl
//             px-5

//             sm:px-8
//             lg:px-10
//           "
//         >

//           <p
//             className="
//               mb-4
//               text-center
//               text-[8px]
//               font-bold
//               uppercase
//               tracking-[0.3em]
//               text-slate-400

//               sm:mb-5
//               sm:text-[10px]
//             "
//           >
//             Shop your favourite brands
//           </p>

//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               justify-center
//               gap-x-7
//               gap-y-4

//               sm:gap-x-12
//               sm:gap-y-5
//             "
//           >
//             {brands.map((brand, index) => (
//               <motion.div
//                 key={brand}
//                 initial={{
//                   opacity: 0,
//                   y: 12,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: index * 0.08,
//                   duration: 0.4,
//                 }}
//                 whileHover={{
//                   scale: 1.08,
//                   y: -2,
//                 }}
//                 className="
//                   cursor-default
//                   text-[10px]
//                   font-bold
//                   tracking-wide
//                   text-slate-400
//                   transition-colors
//                   hover:text-purple-600

//                   sm:text-sm
//                 "
//               >
//                 {brand}
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED PRODUCTS
//       ====================================================== */}
//       <section
//         className="
//           relative
//           overflow-hidden
//           bg-gradient-to-b
//           from-white
//           to-purple-50/50
//           px-5
//           py-16

//           sm:px-8
//           sm:py-20

//           lg:px-10
//         "
//       >

//         {/* Background glow */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.15, 0.3, 0.15],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-20
//             h-72
//             w-72
//             -translate-x-1/2
//             rounded-full
//             bg-purple-300
//             blur-3xl
//           "
//         />

//         <div className="relative mx-auto max-w-7xl">

//           {/* Heading */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="flex items-end justify-between"
//           >

//             <div>

//               <div className="mb-3 flex items-center gap-2">

//                 <span
//                   className="
//                     h-1.5
//                     w-8
//                     rounded-full
//                     bg-gradient-to-r
//                     from-purple-600
//                     to-fuchsia-500
//                   "
//                 />

//                 <span
//                   className="
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-widest
//                     text-purple-600
//                   "
//                 >
//                   Featured
//                 </span>

//               </div>

//               <h2
//                 className="
//                   text-3xl
//                   font-black
//                   tracking-tight
//                   text-slate-900

//                   md:text-4xl
//                 "
//               >
//                 Featured this week
//               </h2>

//               <p
//                 className="
//                   mt-3
//                   max-w-lg
//                   text-sm
//                   leading-6
//                   text-slate-500
//                 "
//               >
//                 Hand-picked smartphones with premium design,
//                 powerful performance and features you'll love.
//               </p>

//             </div>

//             <Link
//               to="/products"
//               className="
//                 hidden
//                 items-center
//                 gap-1
//                 text-sm
//                 font-bold
//                 text-purple-600
//                 hover:text-purple-800
//                 md:flex
//               "
//             >
//               View all

//               <ArrowRight size={16} />
//             </Link>

//           </motion.div>

//           {/* Product cards */}
//           <div
//             className="
//               mt-10
//               grid
//               gap-7
//               sm:grid-cols-2
//               lg:grid-cols-3
//             "
//           >
//             {featured.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
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
//                   duration: 0.6,
//                   delay: index * 0.12,
//                 }}
//                 whileHover={{
//                   y: -7,
//                 }}
//               >
//                 <ProductCard
//                   product={product}
//                   index={index}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile View All */}
//           <div className="mt-10 flex justify-center md:hidden">

//             <Link
//               to="/products"
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-purple-200
//                 bg-white
//                 px-6
//                 py-3
//                 text-sm
//                 font-bold
//                 text-purple-700
//                 shadow-sm
//               "
//             >
//               View all products

//               <ArrowRight size={16} />
//             </Link>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ====================================================== */}
//       <section
//         className="
//           px-5
//           py-16

//           sm:px-8
//           sm:py-20

//           lg:px-10
//         "
//       >

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="
//             relative
//             mx-auto
//             max-w-7xl
//             overflow-hidden
//             rounded-[2rem]
//             bg-gradient-to-r
//             from-purple-800
//             via-violet-700
//             to-blue-700
//             px-7
//             py-12
//             shadow-2xl
//             shadow-purple-200

//             sm:px-12
//             md:py-16
//           "
//         >

//           {/* Glow */}
//           <div
//             className="
//               absolute
//               -right-20
//               -top-20
//               h-60
//               w-60
//               rounded-full
//               bg-fuchsia-400/20
//               blur-3xl
//             "
//           />

//           <div
//             className="
//               absolute
//               -bottom-20
//               -left-20
//               h-60
//               w-60
//               rounded-full
//               bg-blue-400/20
//               blur-3xl
//             "
//           />

//           <div
//             className="
//               relative
//               z-10
//               flex
//               flex-col
//               items-center
//               justify-between
//               gap-7
//               text-center

//               md:flex-row
//               md:text-left
//             "
//           >

//             <div>

//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.25em]
//                   text-purple-200
//                 "
//               >
//                 Ready to upgrade?
//               </p>

//               <h2
//                 className="
//                   mt-3
//                   text-3xl
//                   font-black
//                   text-white

//                   sm:text-4xl
//                 "
//               >
//                 Find your next smartphone.
//               </h2>

//               <p
//                 className="
//                   mt-3
//                   max-w-lg
//                   text-sm
//                   leading-6
//                   text-purple-100/80
//                 "
//               >
//                 Browse our latest collection and discover a phone
//                 that matches your style and performance needs.
//               </p>

//             </div>

//             <Link to="/products">

//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 className="
//                   flex
//                   shrink-0
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-white
//                   px-7
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-purple-700
//                   shadow-xl
//                 "
//               >
//                 Explore Phones

//                 <ArrowRight size={17} />
//               </motion.div>

//             </Link>

//           </div>

//         </motion.div>

//       </section>

//     </div>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const brands = [
  "Oppo",
  "Vivo",
  "Samsung",
  "Apple",
  "Motorola",
  "Xiaomi",
];

const Home = () => {
  const featured = products.slice(0, 3);

  return (
    <div className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="
          relative
          h-[380px]
          overflow-hidden

          sm:h-[540px]

          lg:h-[620px]
        "
      >

        {/* =================================================
            BACKGROUND IMAGE
        ================================================== */}
        <motion.div
          initial={{
            scale: 1.02,
          }}
          animate={{
            scale: [1.02, 1.045, 1.02],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/bg.png')",
            }}
          />
        </motion.div>

        {/* =================================================
            OVERLAY
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/35
            via-purple-950/35
            to-purple-950/55
          "
        />

        {/* =================================================
            BOTTOM OVERLAY
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-16
            bg-gradient-to-t
            from-black/45
            to-transparent

            sm:h-24
          "
        />

        {/* =================================================
            DECORATIVE GLOW
        ================================================== */}
        <motion.div
          animate={{
            opacity: [0.1, 0.22, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[15%]
            h-48
            w-48
            rounded-full
            bg-purple-500/20
            blur-3xl

            sm:h-72
            sm:w-72
          "
        />

        {/* =================================================
            CONTENT CONTAINER

            IMPORTANT:
            h-full means content height is EXACTLY the
            same height as the background/hero.
        ================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            px-5
            py-3

            sm:px-8
            sm:py-8

            lg:px-10
          "
        >

          {/* =================================================
              HERO CONTENT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-full
              max-w-[290px]

              sm:max-w-xl

              lg:max-w-2xl
            "
          >

            {/* =================================================
                LABEL
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                border
                border-white/25
                bg-white/10
                px-2.5
                py-1
                text-[8px]
                font-semibold
                text-white
                backdrop-blur-md

                sm:gap-2
                sm:px-4
                sm:py-2
                sm:text-xs
              "
            >
              <Sparkles
                size={10}
                className="
                  text-fuchsia-300

                  sm:h-[14px]
                  sm:w-[14px]
                "
              />

              New arrivals every week
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-3
                text-[27px]
                font-black
                leading-[0.96]
                tracking-tight
                text-white

                sm:mt-6
                sm:text-5xl
                sm:leading-[1.02]

                lg:text-6xl
              "
            >
              Discover your

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-300
                  via-fuchsia-300
                  to-blue-300
                  bg-clip-text
                  text-transparent
                "
              >
                perfect mobile.
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="
                mt-3
                max-w-[280px]
                text-[9px]
                leading-[1.45]
                text-white/85

                sm:mt-5
                sm:max-w-xl
                sm:text-base
                sm:leading-6
              "
            >
              Explore the latest smartphones from Oppo, Vivo,
              Samsung, Apple, Motorola and Xiaomi — beautifully
              curated and delivered with genuine warranty.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mt-4
                flex
                flex-wrap
                gap-2

                sm:mt-6
                sm:gap-3
              "
            >

              {/* Browse Products */}
              <Link to="/products">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    via-violet-500
                    to-fuchsia-500
                    px-3.5
                    py-2
                    text-[8px]
                    font-bold
                    text-white
                    shadow-lg
                    shadow-purple-900/30

                    sm:gap-2
                    sm:px-6
                    sm:py-3
                    sm:text-xs
                  "
                >
                  Browse Products

                  <ArrowRight
                    size={11}
                    className="
                      sm:h-[15px]
                      sm:w-[15px]
                    "
                  />
                </motion.div>
              </Link>

              {/* Our Story */}
              <Link to="/about">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-3.5
                    py-2
                    text-[8px]
                    font-semibold
                    text-white
                    backdrop-blur-md

                    sm:px-6
                    sm:py-3
                    sm:text-xs
                  "
                >
                  Our Story
                </motion.div>
              </Link>

            </motion.div>

            {/* =================================================
                TRUST FEATURES
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="
                mt-4
                flex
                flex-wrap
                gap-x-3
                gap-y-1.5

                sm:mt-7
                sm:gap-x-6
                sm:gap-y-3
              "
            >

              {/* Genuine Warranty */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-[7px]
                  font-medium
                  text-white/80

                  sm:gap-1.5
                  sm:text-xs
                "
              >
                <ShieldCheck
                  size={10}
                  className="
                    text-purple-300

                    sm:h-[16px]
                    sm:w-[16px]
                  "
                />

                Genuine Warranty
              </div>

              {/* Fast Delivery */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-[7px]
                  font-medium
                  text-white/80

                  sm:gap-1.5
                  sm:text-xs
                "
              >
                <Truck
                  size={10}
                  className="
                    text-blue-300

                    sm:h-[16px]
                    sm:w-[16px]
                  "
                />

                Fast Delivery
              </div>

              {/* Latest Models */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-[7px]
                  font-medium
                  text-white/80

                  sm:gap-1.5
                  sm:text-xs
                "
              >
                <Smartphone
                  size={10}
                  className="
                    text-fuchsia-300

                    sm:h-[16px]
                    sm:w-[16px]
                  "
                />

                Latest Models
              </div>

            </motion.div>

          </motion.div>
        </div>

      </section>

      {/* =====================================================
          BRAND STRIP
      ====================================================== */}
      <section
        className="
          border-b
          border-purple-100
          bg-white
          py-5

          sm:py-8
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5

            sm:px-8
            lg:px-10
          "
        >

          <p
            className="
              mb-3
              text-center
              text-[7px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-slate-400

              sm:mb-5
              sm:text-[10px]
            "
          >
            Shop your favourite brands
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3

              sm:gap-x-12
              sm:gap-y-5
            "
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{
                  opacity: 0,
                  y: 10,
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
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                className="
                  cursor-default
                  text-[9px]
                  font-bold
                  tracking-wide
                  text-slate-400
                  transition-colors
                  hover:text-purple-600

                  sm:text-sm
                "
              >
                {brand}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-white
          to-purple-50/50
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
        "
      >

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-20
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-purple-300
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
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
              duration: 0.7,
            }}
            className="flex items-end justify-between"
          >

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span
                  className="
                    h-1.5
                    w-8
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    to-fuchsia-500
                  "
                />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-purple-600
                  "
                >
                  Featured
                </span>

              </div>

              <h2
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900

                  md:text-4xl
                "
              >
                Featured this week
              </h2>

              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Hand-picked smartphones with premium design,
                powerful performance and features you'll love.
              </p>

            </div>

            <Link
              to="/products"
              className="
                hidden
                items-center
                gap-1
                text-sm
                font-bold
                text-purple-600
                hover:text-purple-800
                md:flex
              "
            >
              View all
              <ArrowRight size={16} />
            </Link>

          </motion.div>

          <div
            className="
              mt-10
              grid
              gap-7
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {featured.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <ProductCard
                  product={product}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          <div
            className="
              mt-10
              flex
              justify-center
              md:hidden
            "
          >
            <Link
              to="/products"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-200
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-purple-700
                shadow-sm
              "
            >
              View all products
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section
        className="
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
        "
      >

        <motion.div
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
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-purple-800
            via-violet-700
            to-blue-700
            px-7
            py-12
            shadow-2xl
            shadow-purple-200

            sm:px-12
            md:py-16
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-fuchsia-400/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-60
              w-60
              rounded-full
              bg-blue-400/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-7
              text-center

              md:flex-row
              md:text-left
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-purple-200
                "
              >
                Ready to upgrade?
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-white

                  sm:text-4xl
                "
              >
                Find your next smartphone.
              </h2>

              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm
                  leading-6
                  text-purple-100/80
                "
              >
                Browse our latest collection and discover a phone
                that matches your style and performance needs.
              </p>

            </div>

            <Link to="/products">

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-purple-700
                  shadow-xl
                "
              >
                Explore Phones

                <ArrowRight size={17} />
              </motion.div>

            </Link>

          </div>

        </motion.div>

      </section>

    </div>
  );
};

export default Home;