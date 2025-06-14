"use client";

import { useEffect, useRef, useState } from "react";

const TeamMember = ({ name, role, image, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const memberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={memberRef}
      className={`group flex flex-col items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c28b7a] via-[#d4a394] to-[#c28b7a] p-1 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>

        {/* Image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#c28b7a] group-hover:border-[#d4a394] transition-colors duration-300">
          <img
            src={image || "/placeholder.svg?height=200&width=200"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#c28b7a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#c28b7a] rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#d4a394] rounded-full opacity-0 group-hover:opacity-100 animate-bounce-delayed transition-opacity duration-300"></div>
      </div>

      <div className="text-center transform transition-all duration-300 group-hover:-translate-y-1">
        <h3 className="text-[#c28b7a] font-bold text-xl mb-1 group-hover:text-[#b8806f] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
          {role}
        </p>

        {/* Animated underline */}
        <div className="mt-2 h-0.5 bg-gradient-to-r from-[#c28b7a] to-[#d4a394] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
    </div>
  );
};

export default function AnimatedTeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const team = [
    {
      name: "Emma Johnson",
      role: "Founder & CEO",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Sarah Williams",
      role: "Head of Product Development",
      image:
        "https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg?s=612x612&w=0&k=20&c=lV6pxz-DknISGT2jjiSvUmSaw0hpMDf-dBpT8HTSAUI=",
    },
    {
      name: "Michael Chen",
      role: "Chief Scientific Officer",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Olivia Martinez",
      role: "Creative Director",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-rose-50 via-amber-50 to-rose-50 py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#c28b7a]/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-[#d4a394]/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#c28b7a]/8 rounded-full animate-float-slow"></div>
      </div>

      <div className="w-[88%] m-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <span className="text-[#c28b7a] font-medium text-sm tracking-wide">
              OUR TEAM
            </span>
          </div>

          <h2 className="text-[#c28b7a] font-bold text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c28b7a] to-[#d4a394]">
              Experts
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our passionate team of beauty experts, scientists, and creatives
            work together to bring you innovative skincare solutions that
            deliver real results.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#c28b7a] to-[#d4a394] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              index={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
