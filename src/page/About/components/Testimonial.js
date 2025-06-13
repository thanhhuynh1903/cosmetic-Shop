import { Quote } from "lucide-react"



const Testimonial = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm relative">
      <Quote className="text-[#c28b7a] opacity-20 absolute top-4 left-4" size={40} />
      <div className="pt-6">
        <p className="text-gray-600 italic mb-6 relative z-10">{quote}</p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-[#c28b7a] font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The products from this company have completely transformed my skin. I've never felt more confident and radiant.",
      name: "Jessica T.",
      title: "Loyal Customer",
    },
    {
      quote:
        "As someone with sensitive skin, finding products that work without causing irritation has been life-changing.",
      name: "Marcus L.",
      title: "Customer Since 2018",
    },
    {
      quote: "Not only are their products amazing, but I love supporting a company with such strong ethical values.",
      name: "Aisha K.",
      title: "Beauty Influencer",
    },
  ]

  return (
    <div className="bg-[#f8f3f1] py-16">
      <div className="w-[88%] m-auto">
        <h2 className="text-[#c28b7a] font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
