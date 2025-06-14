import { useRef } from 'react';
import { motion } from 'framer-motion';

const Milestone = ({ year, title, description, isLast }) => {
  return (
    <motion.div 
      className="flex mb-12 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="mr-6 relative">
        <motion.div 
          className="w-12 h-12 rounded-full bg-[#c28b7a] flex items-center justify-center text-white font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {year}
        </motion.div>
        {!isLast && (
          <motion.div 
            className="absolute top-12 bottom-[-48px] left-1/2 w-0.5 bg-[#c28b7a] transform -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        )}
      </div>
      <div className="flex-1 pt-2">
        <motion.h3 
          className="text-[#c28b7a] font-bold text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

const Timeline = () => {
  const ref = useRef(null);

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Our journey began in a small lab with a big vision: to create skincare that truly works.",
    },
    {
      year: "2017",
      title: "First Product Line",
      description: "We launched our signature collection of natural serums that quickly gained a loyal following.",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Our products became available in 15 countries, bringing our skincare philosophy to a global audience.",
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "We committed to 100% recyclable packaging and carbon-neutral operations by 2025.",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for our breakthrough formulations combining science and natural ingredients.",
    },
   
  ]

  return (
    <div className="w-[88%] m-auto py-16" ref={ref}>
      <motion.h2 
        className="text-[#c28b7a] font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Journey
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <Milestone 
            key={index} 
            year={milestone.year} 
            title={milestone.title} 
            description={milestone.description} 
            isLast={index === milestones.length - 1}
          />
        ))}
        <motion.div 
          className="flex justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
       
        </motion.div>
      </div>
    </div>
  )
}

export default Timeline;