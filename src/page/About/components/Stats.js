import React from 'react';
import { motion } from 'framer-motion';
import useCountUp from '../../../hook/useCount';

const Stat = ({ number, label }) => {
  const numericValue = number.replace(/[^0-9]/g, '');
  const suffix = number.replace(numericValue, '');
  const count = useCountUp(numericValue, 2000);
  
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold text-[#c28b7a] mb-2"
        key={count} // Reset animation when count changes
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          delay: 0.2
        }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const ref = React.useRef(null);
  
  return (
    <div className="bg-white py-16">
      <div className="w-[88%] m-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <Stat number="50+" label="Products" />
          <Stat number="15" label="Countries" />
          <Stat number="500K+" label="Happy Customers" />
          <Stat number="10" label="Industry Awards" />
        </motion.div>
      </div>
    </div>
  )
}

export default Stats;