// import { motion } from "framer-motion";

// const stats = [
//   { label: "Phones sold", value: "120K+" },
//   { label: "Brands stocked", value: "6" },
//   { label: "Cities served", value: "40+" },
//   { label: "Avg. rating", value: "4.8/5" },
// ];

// const About = () => {
//   return (
//     <div>
//       <section className="bg-ice">
//         <div className="mx-auto max-w-4xl px-6 py-20 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-display text-4xl font-bold text-navy md:text-5xl"
//           >
//             Built by people who actually love phones.
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft"
//           >
//             mobiles started as a small counter in a local market and grew into
//             a trusted storefront for six of the world's leading smartphone
//             brands — because good advice and fair pricing never go out of
//             style.
//           </motion.p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl grid gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((s, i) => (
//           <motion.div
//             key={s.label}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.08 }}
//             className="rounded-xl2 border border-ice bg-white p-6 text-center shadow-card"
//           >
//             <p className="font-display text-3xl font-bold text-brand">{s.value}</p>
//             <p className="mt-2 text-sm text-slate-soft">{s.label}</p>
//           </motion.div>
//         ))}
//       </section>

//       <section className="mx-auto max-w-4xl px-6 py-16">
//         <div className="grid gap-10 md:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="font-display text-2xl font-bold text-navy">
//               Our promise
//             </h2>
//             <p className="mt-4 leading-relaxed text-slate-soft">
//               Every device we sell is 100% genuine, comes with full
//               manufacturer warranty, and is checked by our team before it
//               reaches you. No grey imports, no surprises.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="font-display text-2xl font-bold text-navy">
//               Honest advice
//             </h2>
//             <p className="mt-4 leading-relaxed text-slate-soft">
//               We compare specs, cameras and real-world battery life across
//               Oppo, Vivo, Samsung, Apple, Motorola and Xiaomi so you can pick
//               what actually fits your life — not just the highest margin.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;



import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  ThumbsUp,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Phones sold",
    value: "120K+",
    icon: Smartphone,
  },
  {
    label: "Brands stocked",
    value: "6",
    icon: Award,
  },
  {
    label: "Cities served",
    value: "40+",
    icon: Truck,
  },
  {
    label: "Avg. rating",
    value: "4.8/5",
    icon: Star,
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description:
      "Every device we sell is 100% genuine and comes with full manufacturer warranty.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Advice",
    description:
      "We compare specifications, cameras and battery life so you can choose what truly fits your needs.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We believe a great shopping experience continues even after you purchase your phone.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Checked",
    description:
      "Our team carefully checks every device before it reaches your hands.",
  },
];

const brands = [
  "Oppo",
  "Vivo",
  "Samsung",
  "Apple",
  "Motorola",
  "Xiaomi",
];

const About = () => {
  return (
    <div className="overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-white to-[#eef4ff]">

        {/* Background blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-purple-300/30
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-80
            w-80
            rounded-full
            bg-blue-300/25
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-5
            py-16

            sm:px-8
            sm:py-20

            lg:grid-cols-2
            lg:px-10
            lg:py-24
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10"
          >

            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
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
                gap-2
                rounded-full
                border
                border-purple-200
                bg-white/80
                px-4
                py-2
                text-xs
                font-bold
                text-purple-700
                shadow-sm
                backdrop-blur
              "
            >
              <Sparkles
                size={14}
                className="text-purple-500"
              />

              More than a mobile store
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
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
                mt-6
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-900

                sm:text-5xl

                lg:text-6xl
              "
            >
              Built by people who

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-600
                  via-fuchsia-500
                  to-blue-600
                  bg-clip-text
                  text-transparent
                "
              >
                actually love phones.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-500

                sm:text-lg
              "
            >
              mobiles started as a small counter in a local market and
              grew into a trusted storefront for six of the world's
              leading smartphone brands — because good advice and fair
              pricing never go out of style.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              <Link to="/products">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    via-violet-600
                    to-fuchsia-500
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-purple-300/40
                  "
                >
                  Explore Phones
                  <ArrowRight size={16} />
                </motion.div>
              </Link>

              <motion.a
                href="#story"
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  flex
                  items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                "
              >
                Our Story
              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT PHONE VISUAL
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              flex
              h-[340px]
              w-full
              max-w-md
              items-center
              justify-center

              sm:h-[400px]
            "
          >

            {/* Main glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-64
                w-64
                rounded-full
                bg-gradient-to-r
                from-purple-400
                to-blue-400
                opacity-40
                blur-3xl
              "
            />

            {/* Decorative circle */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-64
                w-64
                rounded-full
                border
                border-purple-200/70
                sm:h-80
                sm:w-80
              "
            />

            {/* Phone */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                h-[285px]
                w-[145px]
                rounded-[2rem]
                border-[5px]
                border-slate-900
                bg-slate-950
                shadow-2xl
                shadow-purple-400/40

                sm:h-[330px]
                sm:w-[170px]
              "
            >

              {/* Screen */}
              <div
                className="
                  absolute
                  inset-[4px]
                  overflow-hidden
                  rounded-[1.65rem]
                  bg-gradient-to-br
                  from-purple-600
                  via-violet-500
                  to-blue-500
                "
              >

                {/* Screen glow */}
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    bg-fuchsia-300/50
                    blur-2xl
                  "
                />

                {/* Camera island */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-2
                    h-5
                    w-16
                    -translate-x-1/2
                    rounded-full
                    bg-black
                  "
                />

                {/* Screen content */}
                <div className="absolute inset-x-5 bottom-8">

                  <div className="h-2 w-16 rounded-full bg-white/50" />

                  <div className="mt-2 h-2 w-24 rounded-full bg-white/25" />

                  <div className="mt-5 h-10 rounded-xl bg-white/15 backdrop-blur" />

                </div>

              </div>

              {/* Side button */}
              <div
                className="
                  absolute
                  -right-[7px]
                  top-20
                  h-10
                  w-1
                  rounded-r
                  bg-slate-700
                "
              />

            </motion.div>

            {/* Floating rating */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-10
                left-2
                z-20
                rounded-2xl
                border
                border-white/70
                bg-white/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-md

                sm:left-4
              "
            >
              <div className="flex items-center gap-1">
                <Star
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm font-black text-slate-800">
                  4.8
                </span>
              </div>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Customer rating
              </p>
            </motion.div>

            {/* Floating warranty */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-1
                top-10
                z-20
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/70
                bg-white/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-md

                sm:right-4
              "
            >
              <div className="rounded-full bg-green-100 p-2">
                <ShieldCheck
                  size={15}
                  className="text-green-600"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-800">
                  Genuine
                </p>
                <p className="text-[9px] text-slate-400">
                  Warranty
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="relative bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-purple-100
                    bg-white
                    p-6
                    text-center
                    shadow-[0_10px_40px_rgba(99,102,241,0.08)]
                    transition-shadow
                    hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-purple-50
                      text-purple-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-purple-600
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      mt-4
                      text-3xl
                      font-black
                      text-purple-600
                    "
                  >
                    {stat.value}
                  </motion.p>

                  <p className="mt-1 text-sm text-slate-400">
                    {stat.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section
        id="story"
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-purple-50/60
          to-white
          px-5
          py-20

          sm:px-8

          lg:px-10
          lg:py-24
        "
      >

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left visual */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-purple-600
                  via-violet-600
                  to-blue-600
                  p-8
                  shadow-2xl
                  shadow-purple-200
                "
              >

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    bg-fuchsia-400/30
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    h-56
                    w-56
                    rounded-full
                    bg-blue-300/20
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <Sparkles
                    size={30}
                    className="text-purple-200"
                  />

                  <h2
                    className="
                      mt-8
                      text-3xl
                      font-black
                      text-white
                    "
                  >
                    From a small counter
                    <span className="block text-purple-200">
                      to a trusted destination.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-6
                      text-purple-100/80
                    "
                  >
                    What started as a passion for smartphones
                    became a place where people could get genuine
                    products, fair pricing and straightforward advice.
                  </p>

                  <div className="mt-8 flex items-center gap-3">

                    <div className="flex -space-x-2">

                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="
                            h-9
                            w-9
                            rounded-full
                            border-2
                            border-purple-600
                            bg-white/20
                            backdrop-blur
                          "
                        />
                      ))}

                    </div>

                    <p className="text-xs text-purple-100">
                      Loved by smartphone shoppers
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Right text */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-purple-600
                "
              >
                Our Story
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900

                  sm:text-4xl
                "
              >
                Technology should feel
                <span className="block text-purple-600">
                  simple.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                We started mobiles with one simple idea: buying
                a smartphone should not feel complicated.
              </p>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                Instead of overwhelming customers with technical
                specifications, we focus on the things that matter
                in everyday life — performance, camera quality,
                battery life, reliability and value.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {brands.map((brand) => (
                  <motion.span
                    key={brand}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="
                      rounded-full
                      border
                      border-purple-100
                      bg-white
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-slate-500
                      shadow-sm
                    "
                  >
                    {brand}
                  </motion.span>
                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-6xl">

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
            className="mx-auto max-w-2xl text-center"
          >

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-purple-600
              "
            >
              What we stand for
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-slate-900

                sm:text-4xl
              "
            >
              Why people choose mobiles.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Everything we do comes back to making your smartphone
              buying experience easier, clearer and better.
            </p>

          </motion.div>

          <div
            className="
              mt-12
              grid
              gap-5

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-100
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    transition-all
                    hover:border-purple-100
                    hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)]
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-purple-50
                      text-purple-600
                      transition-all
                      duration-300
                      group-hover:bg-purple-600
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {value.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
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
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-purple-700
            via-violet-700
            to-blue-700
            px-7
            py-12
            text-center
            shadow-2xl
            shadow-purple-200

            sm:px-12
            sm:py-16
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

          <div className="relative z-10">

            <Sparkles
              className="mx-auto text-purple-200"
              size={28}
            />

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-white

                sm:text-4xl
              "
            >
              Ready to find your next phone?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-purple-100/80
              "
            >
              Explore our collection of genuine smartphones
              from the brands you already trust.
            </p>

            <Link to="/products">

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mx-auto
                  mt-7
                  flex
                  w-fit
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

export default About;