import { Fragment } from "react"
import prouctsimg from "../../assets/imgs/washface.jpg"
import face from "../../assets/imgs/face-regular-2.jpg"
import CompanyValues from "./components/CompanyValue"
import MissionVision from "./components/Mission"
import TeamSection from "./components/TeamSection"
import Timeline from "./components/Timeline"
import Testimonials from "./components/Testimonial"
import Stats from "./components/Stats"
import CTASection from "./components/CTA"
import IngredientSpotlight from "./components/IngredientSpotlight"
import "./about.css"

function About() {
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="w-[88%] m-auto p-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full md:w-[55%] h-full rounded-md col-span-1 md:col-span-2">
            <img
              src={prouctsimg || "/placeholder.svg"}
              className="rounded-md w-full h-full object-contain"
              alt="Woman applying skincare product"
            />

            <img
              src={face || "/placeholder.svg"}
              className="rounded-md absolute left-[66%] top-[25%] object-cover img-res hidden md:block"
              alt="Woman with natural beauty"
            />
          </div>
          <div>
            <h2 className="text-[#c28b7a] font-bold text-2xl md:text-4xl lg:text-5xl tracking-wide">
              About <br />
              Company
            </h2>
            <p className="text-[#c28b7a] font-bold tracking-wide">
              Welcome to our world of beauty — where skincare meets science and self-care becomes a ritual. We believe
              in enhancing your natural glow with clean, effective, and cruelty-free cosmetics.
              <br />
              <span className="block pt-10">
                From hydrating serums to vibrant lip shades, our products are thoughtfully crafted to suit every skin
                type. Experience the confidence of healthy, radiant skin with formulas you can trust.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Values */}
      <CompanyValues />

      {/* Timeline/Journey */}
      <Timeline />

      {/* Team Section */}
      <TeamSection />

      {/* Ingredient Spotlight */}
      <IngredientSpotlight />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </Fragment>
  )
}

export default About
