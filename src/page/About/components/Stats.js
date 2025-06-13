import React from 'react'

const Stat = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#c28b7a] mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="w-[88%] m-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat number="50+" label="Products" />
          <Stat number="15" label="Countries" />
          <Stat number="500K+" label="Happy Customers" />
          <Stat number="10" label="Industry Awards" />
        </div>
      </div>
    </div>
  )
}
