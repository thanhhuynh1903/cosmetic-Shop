"use client"

import { useEffect, useRef, useState } from "react"
export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-[#f8f3f1] via-[#f5ede8] to-[#f8f3f1] py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#c28b7a]/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-[#c28b7a]/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#c28b7a]/8 rounded-full animate-float-slow"></div>

        {/* Animated dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#c28b7a]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#c28b7a]/20 rounded-full animate-pulse-delayed"></div>
      </div>

      <div className="w-[88%] m-auto relative z-10">
        {/* Section header with animation */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c28b7a] mb-4">Our Purpose</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c28b7a] to-[#d4a394] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div
            className={`group transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Card background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c28b7a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c28b7a] to-[#d4a394] rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white animate-pulse-gentle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-[#c28b7a] font-bold text-3xl mb-6 group-hover:text-[#b8806f] transition-colors duration-300">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  To create beauty products that enhance natural beauty while prioritizing skin health. We're committed
                  to formulating products that are effective, safe, and environmentally responsible, making self-care
                  accessible to everyone.
                </p>

                {/* Animated underline */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#c28b7a] to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`group transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Card background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c28b7a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4a394] to-[#c28b7a] rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white animate-pulse-gentle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-[#c28b7a] font-bold text-3xl mb-6 group-hover:text-[#b8806f] transition-colors duration-300">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  To revolutionize the beauty industry by setting new standards for product quality, ingredient
                  transparency, and sustainability. We envision a world where beauty routines are moments of joy that
                  contribute to overall wellbeing and confidence.
                </p>

                {/* Animated underline */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#d4a394] to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
