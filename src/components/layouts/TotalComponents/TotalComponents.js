import { motion } from "framer-motion";
import Product from "../../../page/Products/Product";
import Home from "../../../page/Home/Home";
import About from "../../../page/About/About";
import Content from "../../../page/Content/Content";
import Blog from "../../../page/Blog/Blog";

function TotalComponents() {
  return (
    <div className="bg-[#f9f6f3]">
      <Home />
      <motion.div
        className="py-8 md:py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-center text-[#C28B7A] my-4 md:my-6 text-2xl md:text-3xl lg:text-[35px] font-bold leading-tight">
          Why Skincare Makes <br className="hidden sm:block" /> You Happy
        </h2>
        <div className="mx-auto w-16 h-1 bg-[#C28B7A] rounded my-4"></div>
        <p className="text-center text-[#7d6e67] max-w-2xl mx-auto text-base md:text-lg px-2 sm:px-0">
          Discover the science and joy behind skincare. Taking care of your skin is not just about beauty—it's about self-care, confidence, and happiness.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Product />
      </motion.div>
      <div className="w-full my-8 flex justify-center">
  <div className="h-1 w-24 bg-[#C28B7A] rounded"></div>
</div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Blog />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <Content />
      </motion.div>
    </div>
  );
}

export default TotalComponents;