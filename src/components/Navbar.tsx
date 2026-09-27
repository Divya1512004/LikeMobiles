// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ArrowRight } from "lucide-react";


// const links = [
//   { to: "/", label: "Home" },
//   { to: "/products", label: "Products" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const linkClass = ({ isActive }: { isActive: boolean }) =>
//     `relative px-1 py-2 text-sm font-semibold transition-all duration-300 ${
//       isActive
//         ? "text-purple-700"
//         : "text-slate-600 hover:text-purple-700"
//     }`;

//   return (
//     <header className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/90 backdrop-blur-xl">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">

//         {/* ================= LOGO ================= */}
//         <NavLink
//           to="/"
//           className="group relative flex items-center"
//           onClick={() => setOpen(false)}
//         >
//           {/* Logo container */}
//           <motion.div
//             whileHover={{
//               scale: 1.04,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 20,
//             }}
//             className="
//               relative
//               h-14
//               w-[190px]
//               sm:h-16
//               sm:w-[220px]
//               md:h-14
//               md:w-[190px]
//               overflow-hidden
//               rounded-xl
//               bg-white
//             "
//           >
//             {/* Logo image */}
//             <img
//               src="/logo1.png"
//               alt="LikeMobiles"
//               className="
//                 h-full
//                 w-full
//                 object-contain
//                 object-left
//               "
//             />

//             {/* ================= SHINING EFFECT ================= */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 top-0
//                 -left-1/2
//                 h-full
//                 w-1/3
//                 rotate-[20deg]
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/80
//                 to-transparent
//                 blur-[2px]
//               "
//               animate={{
//                 left: ["-50%", "150%"],
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatDelay: 2.1,
//               }}
//             />

//             {/* Extra glow */}
//             <motion.div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/10
//                 to-transparent
//               "
//               animate={{
//                 opacity: [0, 0.8, 0],
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatDelay: 2.1,
//               }}
//             />
//           </motion.div>
//         </NavLink>

//         {/* ================= DESKTOP NAV ================= */}
//         <div className="hidden items-center gap-2 md:flex">

//           <div
//             className="
//               flex
//               items-center
//               gap-1
//               rounded-full
//               border
//               border-purple-100
//               bg-purple-50/50
//               px-2
//               py-1.5
//             "
//           >
//             {links.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === "/"}
//                 className={linkClass}
//               >
//                 {({ isActive }) => (
//                   <span className="relative block px-3 py-1.5">
//                     {link.label}

//                     {/* Active background */}
//                     {isActive && (
//                       <motion.span
//                         layoutId="nav-active"
//                         className="
//                           absolute
//                           inset-0
//                           -z-10
//                           rounded-full
//                           bg-white
//                           shadow-sm
//                           shadow-purple-100
//                         "
//                         transition={{
//                           type: "spring",
//                           stiffness: 450,
//                           damping: 30,
//                         }}
//                       />
//                     )}

//                     {/* Active dot */}
//                     {isActive && (
//                       <motion.span
//                         layoutId="nav-dot"
//                         className="
//                           absolute
//                           -bottom-1
//                           left-1/2
//                           h-1
//                           w-1
//                           -translate-x-1/2
//                           rounded-full
//                           bg-purple-600
//                         "
//                       />
//                     )}
//                   </span>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* ================= SHOP NOW ================= */}
//           <NavLink to="/products" className="ml-3">
//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 30px rgba(124,58,237,0.30)",
//               }}
//               whileTap={{
//                 scale: 0.96,
//               }}
//               className="
//                 group
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-gradient-to-r
//                 from-purple-700
//                 via-violet-600
//                 to-fuchsia-500
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-bold
//                 text-white
//                 shadow-lg
//                 shadow-purple-300/40
//               "
//             >
//               Shop Now

//               <ArrowRight
//                 size={16}
//                 className="
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//               />
//             </motion.div>
//           </NavLink>
//         </div>

//         {/* ================= MOBILE BUTTON ================= */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setOpen((prev) => !prev)}
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-purple-100
//             bg-purple-50
//             text-purple-700
//             shadow-sm
//             md:hidden
//           "
//           aria-label="Toggle menu"
//         >
//           <AnimatePresence mode="wait">
//             {open ? (
//               <motion.div
//                 key="close"
//                 initial={{
//                   rotate: -90,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   rotate: 0,
//                   opacity: 1,
//                 }}
//                 exit={{
//                   rotate: 90,
//                   opacity: 0,
//                 }}
//               >
//                 <X size={22} />
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="menu"
//                 initial={{
//                   rotate: 90,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   rotate: 0,
//                   opacity: 1,
//                 }}
//                 exit={{
//                   rotate: -90,
//                   opacity: 0,
//                 }}
//               >
//                 <Menu size={22} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{
//               height: 0,
//               opacity: 0,
//             }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.3,
//               ease: "easeInOut",
//             }}
//             className="
//               overflow-hidden
//               border-t
//               border-purple-100
//               bg-white/95
//               backdrop-blur-xl
//               md:hidden
//             "
//           >
//             <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">

//               {links.map((link, index) => (
//                 <motion.div
//                   key={link.to}
//                   initial={{
//                     x: -20,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     x: 0,
//                     opacity: 1,
//                   }}
//                   transition={{
//                     delay: index * 0.06,
//                   }}
//                 >
//                   <NavLink
//                     to={link.to}
//                     end={link.to === "/"}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${
//                         isActive
//                           ? "bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-700 shadow-sm"
//                           : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
//                       }`
//                     }
//                   >
//                     {link.label}
//                   </NavLink>
//                 </motion.div>
//               ))}

//               <NavLink
//                 to="/products"
//                 onClick={() => setOpen(false)}
//                 className="mt-2"
//               >
//                 <motion.div
//                   whileTap={{
//                     scale: 0.98,
//                   }}
//                   className="
//                     flex
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     bg-gradient-to-r
//                     from-purple-700
//                     via-violet-600
//                     to-fuchsia-500
//                     px-5
//                     py-3.5
//                     text-sm
//                     font-bold
//                     text-white
//                     shadow-lg
//                     shadow-purple-300/40
//                   "
//                 >
//                   Shop Now
//                   <ArrowRight size={17} />
//                 </motion.div>
//               </NavLink>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "text-purple-700"
        : "text-slate-600 hover:text-purple-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3.5 sm:px-5 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <NavLink
          to="/"
          className="group relative flex min-w-0 items-center"
          onClick={() => setOpen(false)}
        >
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="
              relative
              h-20
              w-[calc(100vw-80px)]
              max-w-[250px]

              sm:h-20
              sm:w-[250px]

              md:h-14
              md:w-[190px]

              overflow-hidden
              rounded-xl
              bg-white
            "
          >
            {/* =================================================
                LOGO IMAGE
            ================================================== */}
            <img
              src="/logo1.png"
              alt="LikeMobiles"
              className="
                h-full
                w-full
                object-contain
                object-left
              "
            />

            {/* =================================================
                SLOW SLIDING SHINE
            ================================================== */}
            <motion.div
              className="
                pointer-events-none
                absolute
                top-[-20%]
                -left-1/2
                h-[140%]
                w-1/3
                rotate-[20deg]
                bg-gradient-to-r
                from-transparent
                via-white/75
                to-transparent
                blur-[3px]
              "
              animate={{
                left: ["-50%", "150%"],
              }}
              transition={{

                duration: 1.4,

                ease: "easeInOut",

                repeat: Infinity,
                repeatDelay: 1.6,
              }}
            />

            {/* =================================================
                SOFT GLOW
            ================================================== */}
            <motion.div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
              "
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.6,
              }}
            />
          </motion.div>
        </NavLink>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-2 md:flex">

          {/* Navigation links */}
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-purple-100
              bg-purple-50/50
              px-2
              py-1.5
            "
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {({ isActive }) => (
                  <span className="relative block px-3 py-1.5">

                    {link.label}

                    {/* Active background */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="
                          absolute
                          inset-0
                          -z-10
                          rounded-full
                          bg-white
                          shadow-sm
                          shadow-purple-100
                        "
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="
                          absolute
                          -bottom-1
                          left-1/2
                          h-1
                          w-1
                          -translate-x-1/2
                          rounded-full
                          bg-purple-600
                        "
                      />
                    )}

                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* =================================================
              SHOP NOW BUTTON
          ================================================== */}
          <NavLink
            to="/products"
            className="ml-3"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 30px rgba(124,58,237,0.30)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-purple-700
                via-violet-600
                to-fuchsia-500
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-purple-300/40
              "
            >
              Shop Now

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.div>
          </NavLink>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpen((prev) => !prev)}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-purple-100
            bg-purple-50
            text-purple-700
            shadow-sm
            md:hidden
          "
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">

            {open ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
              >
                <Menu size={22} />
              </motion.div>
            )}

          </AnimatePresence>
        </motion.button>
      </nav>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t
              border-purple-100
              bg-white/95
              backdrop-blur-xl
              md:hidden
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-7xl
                flex-col
                gap-2
                px-5
                py-5
              "
            >

              {/* Mobile links */}
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-700 shadow-sm"
                          : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile Shop Now */}
              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-700
                    via-violet-600
                    to-fuchsia-500
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-purple-300/40
                  "
                >
                  Shop Now
                  <ArrowRight size={17} />
                </motion.div>
              </NavLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

