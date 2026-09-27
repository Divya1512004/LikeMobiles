// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-navy text-white">
//       <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
//         <div>
//           <div className="flex items-center gap-2">
//             <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-navy font-display font-bold">
//               M
//             </span>
//             <span className="font-display text-lg font-bold">mobiles</span>
//           </div>
//           <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
//             A curated storefront for today's flagship smartphones — Oppo, Vivo,
//             Samsung, Apple, Motorola and Xiaomi, all in one place.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
//             Explore
//           </h4>
//           <ul className="mt-4 space-y-2 text-sm text-white/70">
//             <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
//             <li><NavLink to="/products" className="hover:text-white">Products</NavLink></li>
//             <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
//             <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
//             Get in touch
//           </h4>
//           <ul className="mt-4 space-y-2 text-sm text-white/70">
//             <li>hello@mobiles.store</li>
//             <li>+91 98765 43210</li>
//             <li>Chennai, Tamil Nadu, India</li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
//         © {new Date().getFullYear()} mobiles. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  ThumbsUp,
} from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // const socialItems = [
  //   {
  //     icon: Instagram,
  //     label: "Instagram",
  //   },
  //   {
  //     icon: Facebook,
  //     label: "Facebook",
  //   },
  //   {
  //     icon: Twitter,
  //     label: "Twitter",
  //   },
  // ];

  return (
    <footer className="relative mt-16 overflow-hidden bg-[#071426] text-white">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
        />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">

          {/* =====================================================
              BRAND
          ===================================================== */}
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
              duration: 0.6,
            }}
          >

            {/* Logo */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="inline-flex cursor-pointer items-center gap-3"
            >

              {/* Thumbs-up logo */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.12,
                  rotate: 8,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
              >
                <ThumbsUp
                  size={25}
                  strokeWidth={2.5}
                />
              </motion.div>

              <div>
                <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                  Likemobiles
                </h2>

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  Your mobile destination
                </p>
              </div>

            </motion.div>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Discover premium smartphones from your favorite brands,
              carefully curated for performance, style and everyday
              innovation.
            </p>

            {/* Social buttons */}
            {/* <div className="mt-6 flex gap-3">
              {socialItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.label}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-blue-300"
                  >
                    <Icon size={17} />
                  </motion.button>
                );
              })}
            </div> */}
          </motion.div>

          {/* =====================================================
              EXPLORE
          ===================================================== */}
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
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <motion.span
                      className="h-1 w-1 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100"
                    />

                    <span className="transition-transform group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================================
              CONTACT
          ===================================================== */}
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
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-white/35">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    hello@mobiles.store
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-white/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-5 text-white/65">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              NEWSLETTER / CTA
          ===================================================== */}
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
              duration: 0.6,
              delay: 0.3,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <Smartphone size={19} />
            </div>

            <h3 className="mt-4 text-lg font-bold">
              Find your next phone
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/45">
              Explore our latest collection and discover a phone
              that fits your style.
            </p>

            <NavLink to="/products">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-xs font-bold text-white shadow-lg shadow-blue-900/30"
              >
                Explore Products
                <ArrowRight size={15} />
              </motion.div>
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div className="relative border-t border-white/10">

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-6 lg:px-8 sm:text-left"
        >
          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white/55">
              Likemobiles
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] text-white/30">
            <span>Premium phones</span>

            <span className="h-1 w-1 rounded-full bg-blue-500" />

            <span>Trusted shopping</span>

            <span className="h-1 w-1 rounded-full bg-blue-500" />

            <span>Made for you</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;