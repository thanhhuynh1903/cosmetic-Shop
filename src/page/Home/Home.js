import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./Home.css"
import routes from "../../route/routes"
import laning from "../../assets/imgs/header.png"

function Home() {
  return (
    <>
      <motion.div
        className="bg-[#faf7f5]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full">
          <div className="w-[95%] md:w-[88%] h-full m-auto p-auto py-12 md:py-[126px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Animation */}
            <motion.div
              className="py-6 md:py-10 text-center md:text-left order-2 md:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
            >
              <h1 className="text-[#c28b7a] tracking-wide text-3xl md:text-4xl lg:text-5xl">
                Natural Skincare <br />
                Daily Routine
              </h1>
              <p className="text-[#c28b7a] font-bold opacity-40 tracking-wide mt-4">
                Nurturing beauty is not only nurturing the spirit, <br className="hidden md:block" /> but it is also
                nurturing the human personality.
              </p>
              <div>
                <div>
                  <Link to={routes.products}>
                    <button className="bg-[#c28b7a] text-white py-2 md:py-3 px-6 md:px-8 my-6 md:my-8 rounded-md text-base md:text-lg hover:bg-[#b27a69] transition-colors">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* Image Animation */}
            <motion.div
              className="flex justify-center items-center order-1 md:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={laning || "/placeholder.svg"}
                alt="Natural Skincare"
                className="max-w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home