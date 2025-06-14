import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#fdf8f5] to-[#f9f0e6] overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Images Section */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Main image container */}
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: "backOut",
                    },
                  },
                }}
              >
                <div className="bg-gradient-to-br from-rose-100 to-amber-100 w-full h-full rounded-3xl flex items-center justify-center">
                  <motion.div
                    animate="float"
                    variants={floatVariants}
                    className="text-center"
                  >
                    <img
                      src={
                        "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"
                      }
                      alt="Image description"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>

              {/* Floating secondary image */}
              <motion.div
                className="absolute -top-8 -right-14 md:-top-8 md:-right-8 lg:-right-12 w-48 h-48 lg:w-56 lg:h-56"
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.7,
                      ease: "backOut",
                    },
                  },
                }}
              >
                <motion.div
                  className="relative w-[60%] md:w-full h-[60%] md:h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                  animate="float"
                  variants={floatVariants}
                >
                  <div className="bg-gradient-to-br from-rose-50 to-amber-50 w-full h-full flex items-center justify-center">
                    <img
                      src={
                        "https://cdn.cosmetics.vn/cham-soc-da/it-cosmetics-confidence-in-a-gel-lotion-2.jpg"
                      }
                      alt="Image description"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Small floating element */}
              <motion.div
                className="absolute -bottom-[90px] -left-3 md:-bottom-6 md:-left-6 w-32 h-32 lg:w-40 lg:h-40"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6,
                      duration: 0.7,
                      ease: "backOut",
                    },
                  },
                }}
              >
                <motion.div
                  className="relative w-[60%] h-[60%] md:w-full md:h-full rounded-full overflow-hidden shadow-lg border-4 border-white"
                  animate="float"
                  variants={floatVariants}
                >
                  <div className="bg-gradient-to-br from-rose-200 to-amber-200 w-full h-full flex items-center justify-center">
                    <img
                      src={
                        "https://goodmockups.com/wp-content/uploads/2020/04/Free-Body-Lotion-Squeeze-Pump-Bottle-Mockup-PSD.jpg"
                      }
                      alt="Image description"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-1/2 -left-4 w-8 h-8 bg-rose-300 rounded-full opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <motion.div
              className="absolute bottom-1/4 -right-2 w-6 h-6 bg-amber-300 rounded-full opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Header */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-rose-100 rounded-full"
                initial={{ opacity: 0, x: -30 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.6,
                      ease: "backOut",
                    },
                  },
                }}
              >
                <span className="text-rose-600 font-medium text-sm tracking-wide">
                  OUR STORY
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-rose-800 leading-tight"
                variants={itemVariants}
              >
                About
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Company
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Main content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.p
                className="text-lg lg:text-xl text-rose-700 leading-relaxed font-medium"
                variants={itemVariants}
              >
                Welcome to our world of beauty — where skincare meets science
                and self-care becomes a ritual. We believe in enhancing your
                natural glow with clean, effective, and cruelty-free cosmetics.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  "Clean & Natural Ingredients",
                  "Cruelty-Free & Sustainable",
                  "Science-Backed Formulas",
                  "For Every Skin Type",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center mt-1"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                    </motion.div>
                    <p className="text-rose-600 font-medium">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-rose-600 leading-relaxed"
                variants={itemVariants}
              >
                From hydrating serums to vibrant lip shades, our products are
                thoughtfully crafted to suit every skin type. Experience the
                confidence of healthy, radiant skin with formulas you can trust.
              </motion.p>

              <motion.p
                className="text-rose-600 leading-relaxed"
                variants={itemVariants}
              >
                Our commitment goes beyond beauty — we're dedicated to
                sustainability, ethical sourcing, and empowering you to feel
                confident in your own skin. Join thousands of satisfied
                customers who have made us part of their daily beauty ritual.
              </motion.p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => navigate("/products")}
                className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold rounded-full hover:from-rose-700 hover:to-rose-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(225, 29, 72, 0.4)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Products
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e11d48",
                  color: "#fff",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
