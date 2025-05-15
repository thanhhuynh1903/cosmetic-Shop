import "../Header/Header.css"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-[#c89687] w-full">
      <div className="w-[95%] md:w-[88%] h-full m-auto p-auto py-8 md:py-[50px]">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="mb-8">
            <Link to="/">
              <h1 className="custom-logo text-2xl md:text-3xl">Beauty</h1>
            </Link>
            <p className="text-white text-sm opacity-75 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col text-white">
              <span className="text-lg font-medium pb-2 border-b border-white/20 mb-2">Company</span>
              <Link className="py-1 hover:underline">About us</Link>
              <Link className="py-1 hover:underline">Contact</Link>
            </div>

            <div className="flex flex-col text-white">
              <span className="text-lg font-medium pb-2 border-b border-white/20 mb-2">Social</span>
              <Link className="py-1 hover:underline">Facebook</Link>
              <Link className="py-1 hover:underline">Instagram</Link>
            </div>

            <div className="flex flex-col text-white col-span-2 mt-4">
              <span className="text-lg font-medium pb-2 border-b border-white/20 mb-2">Term & policies</span>
              <div className="grid grid-cols-2">
                <Link className="py-1 hover:underline">Service</Link>
                <Link className="py-1 hover:underline">Privacy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          <div className="col-span-2 mr-[50px]">
            <Link to="/">
              <h1 className="custom-logo text-3xl">Beauty</h1>
            </Link>
            <p className="text-white text-sm opacity-75 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div className="flex flex-col text-white">
            <span className="text-lg font-medium pb-2">About</span>
            <Link className="py-1 hover:underline">About us</Link>
            <Link className="py-1 hover:underline">Contact</Link>
          </div>

          <div className="flex flex-col text-white">
            <span className="text-lg font-medium pb-2">Social</span>
            <Link className="py-1 hover:underline">Facebook</Link>
            <Link className="py-1 hover:underline">Instagram</Link>
          </div>

          <div className="flex flex-col text-white">
            <span className="text-lg font-medium pb-2">Term & policies</span>
            <Link className="py-1 hover:underline">Term & service</Link>
            <Link className="py-1 hover:underline">Privacy</Link>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 pt-4 border-t border-white/20 text-white text-sm opacity-75 text-center">
          © {new Date().getFullYear()} Beauty. All rights reserved.
        </div>
      </div>
    </div>
  )
}
