import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <div className="bg-[#c28b7a] py-16 text-white">
      <div className="w-[88%] m-auto text-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4">Join Our Beauty Journey</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Experience the difference of skincare products made with intention, science, and a deep respect for your
          skin's natural beauty.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-[#c28b7a] px-6 py-3 rounded-md font-bold flex items-center hover:bg-opacity-90 transition-all">
            Shop Our Products <ArrowRight size={16} className="ml-2" />
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-[#c28b7a] transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
