"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage404() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(10)

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown <= 0) {
      navigate("/")
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f6] to-white flex flex-col items-center justify-center px-4 py-12">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-[#f8f0ed] opacity-40"></div>
        <div className="absolute bottom-[15%] right-[10%] w-32 h-32 rounded-full bg-[#f8f0ed] opacity-40"></div>
        <div className="absolute top-[40%] right-[15%] w-16 h-16 rounded-full bg-[#f8f0ed] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Error code */}
        <h1 className="text-[120px] md:text-[180px] font-light text-[#c28b7a] leading-none">
          4<span className="inline-block animate-bounce">0</span>4
        </h1>

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 -mt-10 relative z-20">
          <div className="mx-auto max-w-md">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">Oops! Page not found</h2>

            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Don't worry, beauty is about the journey, not
              the destination.
            </p>

            {/* Illustration */}
            <div className="relative w-48 h-48 mx-auto my-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#c28b7a]">
                  <circle cx="50" cy="50" r="40" fill="#f8f0ed" />
                  <path d="M30,40 Q50,20 70,40" stroke="#c28b7a" strokeWidth="3" fill="none" />
                  <circle cx="35" cy="35" r="5" fill="#c28b7a" />
                  <circle cx="65" cy="35" r="5" fill="#c28b7a" />
                </svg>
                <div className="absolute bottom-5 w-20 h-6 bg-[#f8f0ed] rounded-full"></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-lg border border-[#c28b7a] text-[#c28b7a] font-medium transition-colors hover:bg-[#f8f0ed]"
              >
                Go Back
              </button>

              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-lg bg-[#c28b7a] text-white font-medium transition-colors hover:bg-[#b07a69]"
              >
                Go Home
              </button>
            </div>

            {/* Countdown */}
            <p className="text-sm text-gray-500 mt-8">Redirecting to home in {countdown} seconds...</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Need help?{" "}
          <a href="/contact" className="text-[#c28b7a] hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  )
}
