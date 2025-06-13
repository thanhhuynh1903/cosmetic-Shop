import React from "react"

const Milestone = ({ year, title, description }) => {
  return (
    <div className="flex mb-12 relative">
      <div className="mr-6 relative">
        <div className="w-12 h-12 rounded-full bg-[#c28b7a] flex items-center justify-center text-white font-bold">
          {year}
        </div>
        <div className="absolute top-12 bottom-[-48px] left-1/2 w-0.5 bg-[#c28b7a] transform -translate-x-1/2"></div>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-[#c28b7a] font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
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
      description:
        "Our products became available in 15 countries, bringing our skincare philosophy to a global audience.",
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
    <div className="w-[88%] m-auto py-16">
      <h2 className="text-[#c28b7a] font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 text-center">
        Our Journey
      </h2>
      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <Milestone key={index} year={milestone.year} title={milestone.title} description={milestone.description} />
        ))}
        <div className="flex justify-start">
          <div className="w-12 h-12 rounded-full bg-[#c28b7a] flex items-center justify-center text-white font-bold">
            Now
          </div>
        </div>
      </div>
    </div>
  )
}
