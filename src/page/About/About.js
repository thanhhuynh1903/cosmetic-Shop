import { Fragment } from "react";

import CompanyValues from "./components/CompanyValue";
import MissionVision from "./components/Mission";
import TeamSection from "./components/TeamSection";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonial";
import Stats from "./components/Stats";
import CTASection from "./components/CTA";
import IngredientSpotlight from "./components/IngredientSpotlight";
import AboutSection from "./components/AboutSection";
import "./about.css";

function About() {
  return (
    <Fragment>
      {/* Hero Section */}
    <AboutSection/>

      {/* Stats Section */}
      <Stats />

      <Timeline />
      <MissionVision />

      {/* Company Values */}
      <CompanyValues />

      {/* Timeline/Journey */}

      {/* Team Section */}
      <TeamSection />

      {/* Ingredient Spotlight */}
      <IngredientSpotlight />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </Fragment>
  );
}

export default About;
