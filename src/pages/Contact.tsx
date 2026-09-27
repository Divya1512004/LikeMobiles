// import { useState, type FormEvent} from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="mx-auto max-w-5xl px-6 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
//           Get in touch
//         </h1>
//         <p className="mt-3 max-w-xl text-slate-soft">
//           Questions about a device, an order, or a bulk purchase? Send us a
//           message and we'll get back within a day.
//         </p>
//       </motion.div>

//       <div className="mt-12 grid gap-12 md:grid-cols-5">
//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           onSubmit={handleSubmit}
//           className="md:col-span-3 space-y-5 rounded-xl2 border border-ice bg-white p-8 shadow-card"
//         >
//           <div className="grid gap-5 sm:grid-cols-2">
//             <div>
//               <label className="text-sm font-medium text-navy">Name</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="Your name"
//                 className="mt-1.5 w-full rounded-lg border border-ice bg-mist px-4 py-2.5 text-sm outline-none focus:border-brand"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-navy">Email</label>
//               <input
//                 required
//                 type="email"
//                 placeholder="you@example.com"
//                 className="mt-1.5 w-full rounded-lg border border-ice bg-mist px-4 py-2.5 text-sm outline-none focus:border-brand"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="text-sm font-medium text-navy">Subject</label>
//             <input
//               type="text"
//               placeholder="What's this about?"
//               className="mt-1.5 w-full rounded-lg border border-ice bg-mist px-4 py-2.5 text-sm outline-none focus:border-brand"
//             />
//           </div>
//           <div>
//             <label className="text-sm font-medium text-navy">Message</label>
//             <textarea
//               required
//               rows={5}
//               placeholder="Tell us how we can help"
//               className="mt-1.5 w-full rounded-lg border border-ice bg-mist px-4 py-2.5 text-sm outline-none focus:border-brand"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-dark"
//           >
//             Send Message
//           </button>
//           {submitted && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-sm font-medium text-brand"
//             >
//               Thanks — your message has been sent.
//             </motion.p>
//           )}
//         </motion.form>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="md:col-span-2 space-y-6"
//         >
//           <div className="rounded-xl2 border border-ice bg-ice p-6">
//             <h3 className="font-display font-semibold text-navy">Store</h3>
//             <p className="mt-2 text-sm leading-relaxed text-slate-soft">
//               No. 12, Anna Salai
//               <br />
//               Chennai, Tamil Nadu 600002
//             </p>
//           </div>
//           <div className="rounded-xl2 border border-ice bg-ice p-6">
//             <h3 className="font-display font-semibold text-navy">Phone</h3>
//             <p className="mt-2 text-sm text-slate-soft">+91 98765 43210</p>
//           </div>
//           <div className="rounded-xl2 border border-ice bg-ice p-6">
//             <h3 className="font-display font-semibold text-navy">Email</h3>
//             <p className="mt-2 text-sm text-slate-soft">hello@mobiles.store</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit our store",
    value: (
      <>
        No. 12, Anna Salai
        <br />
        Chennai, Tamil Nadu 600002
      </>
    ),
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+91 98765 43210",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "hello@mobiles.store",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#f8f7ff]
          via-white
          to-[#eef4ff]
        "
      >

        {/* Animated background glow */}
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
            max-w-7xl
            px-5
            py-16

            sm:px-8
            sm:py-20

            lg:px-10
            lg:py-24
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                mx-auto
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
              <MessageCircle
                size={14}
                className="text-purple-500"
              />

              We'd love to hear from you
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
                delay: 0.2,
              }}
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                sm:text-5xl

                lg:text-6xl
              "
            >
              Let's talk about your

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
                next smartphone.
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
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-500

                sm:text-lg
              "
            >
              Have a question about a device, your order, or a bulk
              purchase? Send us a message and our team will be happy
              to help.
            </motion.p>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CONTACT AREA
      ====================================================== */}
      <section
        className="
          relative
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
        "
      >

        <div className="mx-auto max-w-6xl">

          <div
            className="
              grid
              gap-8

              lg:grid-cols-5
            "
          >

            {/* =================================================
                FORM
            ================================================== */}
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
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-purple-100
                bg-white
                p-6
                shadow-[0_20px_60px_rgba(99,102,241,0.10)]

                sm:p-8

                lg:col-span-3
              "
            >

              {/* Form decoration */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-purple-100/60
                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* Form heading */}
                <div className="mb-7">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-purple-50
                      text-purple-600
                    "
                  >
                    <Send size={19} />
                  </div>

                  <h2
                    className="
                      mt-4
                      text-2xl
                      font-black
                      text-slate-900
                    "
                  >
                    Send us a message
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    Fill in the details below and we'll get back
                    to you as soon as possible.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="name"
                        className="
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Your name"
                        className="
                          mt-2
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          text-slate-800
                          outline-none
                          transition-all
                          placeholder:text-slate-400
                          focus:border-purple-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-purple-100
                        "
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="email"
                        className="
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="
                          mt-2
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          text-slate-800
                          outline-none
                          transition-all
                          placeholder:text-slate-400
                          focus:border-purple-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-purple-100
                        "
                      />

                    </div>

                  </div>

                  {/* Subject */}
                  <div>

                    <label
                      htmlFor="subject"
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-purple-100
                      "
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label
                      htmlFor="message"
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="
                        mt-2
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-purple-100
                      "
                    />

                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      via-violet-600
                      to-fuchsia-500
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-purple-200
                      transition-shadow
                      hover:shadow-xl
                    "
                  >
                    Send Message
                    <ArrowRight size={17} />
                  </motion.button>

                  {/* Success */}
                  {submitted && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-green-100
                        bg-green-50
                        p-4
                        text-sm
                        font-medium
                        text-green-700
                      "
                    >
                      <CheckCircle2 size={19} />

                      <span>
                        Thanks — your message has been sent.
                      </span>
                    </motion.div>
                  )}

                </form>

              </div>
            </motion.div>

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}
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
              className="
                space-y-5

                lg:col-span-2
              "
            >

              {/* Info heading */}
              <div className="mb-6">

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-purple-600
                  "
                >
                  Contact details
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-black
                    text-slate-900
                  "
                >
                  We're here to help.
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Reach us through any of the options below.
                </p>

              </div>

              {/* Contact cards */}
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-slate-100
                      bg-white
                      p-5
                      shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                      transition-shadow
                      hover:shadow-[0_15px_40px_rgba(99,102,241,0.12)]
                    "
                  >

                    <div className="flex items-start gap-4">

                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          ${item.bg}
                          ${item.color}
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        `}
                      >
                        <Icon size={21} />
                      </div>

                      <div>

                        <h3
                          className="
                            text-sm
                            font-bold
                            text-slate-900
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            text-sm
                            leading-6
                            text-slate-500
                          "
                        >
                          {item.value}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

              {/* Opening hours */}
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
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                }}
                className="
                  rounded-2xl
                  bg-gradient-to-br
                  from-purple-700
                  via-violet-700
                  to-blue-700
                  p-6
                  text-white
                  shadow-xl
                  shadow-purple-200
                "
              >

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-white/15 p-2.5">
                    <Clock3 size={19} />
                  </div>

                  <div>

                    <h3 className="text-sm font-bold">
                      Store hours
                    </h3>

                    <p className="mt-1 text-xs text-purple-100/80">
                      We're ready when you are.
                    </p>

                  </div>

                </div>

                <div
                  className="
                    mt-5
                    space-y-2
                    border-t
                    border-white/15
                    pt-4
                    text-xs
                  "
                >
                  <div className="flex justify-between">
                    <span className="text-purple-100/70">
                      Monday - Saturday
                    </span>

                    <span className="font-semibold">
                      9:00 AM - 8:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-purple-100/70">
                      Sunday
                    </span>

                    <span className="font-semibold">
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>

              </motion.div>

              {/* Trust note */}
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
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-2
                  py-2
                "
              >

                <ShieldCheck
                  size={18}
                  className="shrink-0 text-green-500"
                />

                <p className="text-xs leading-5 text-slate-400">
                  Genuine products, manufacturer warranty and
                  straightforward support.
                </p>

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
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
            bg-slate-950
            px-7
            py-12
            text-center

            sm:px-12
            sm:py-14
          "
        >

          {/* Animated glow */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/30
              blur-3xl
            "
          />

          <div className="relative z-10">

            <Sparkles
              size={25}
              className="mx-auto text-purple-400"
            />

            <h2
              className="
                mt-4
                text-2xl
                font-black
                text-white

                sm:text-3xl
              "
            >
              Need help choosing a phone?
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-lg
                text-sm
                leading-6
                text-slate-400
              "
            >
              Tell us what you need and we'll help you find
              a smartphone that fits your lifestyle.
            </p>

            <motion.a
              href="tel:+919876543210"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mx-auto
                mt-6
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-slate-900
                shadow-xl
              "
            >
              <Phone size={16} />
              Call us now
            </motion.a>

          </div>

        </motion.div>

      </section>

    </div>
  );
};

export default Contact;