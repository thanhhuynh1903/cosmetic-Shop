import { Check } from "lucide-react";

const Value = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start mb-8">
      <div className="flex items-center mb-2">
        <div className="bg-[#c28b7a] rounded-full p-1 mr-2">
          <Check size={16} className="text-white" />
        </div>
        <h3 className="text-[#c28b7a] font-bold text-xl">{title}</h3>
      </div>
      <p className="text-gray-600 pl-8">{description}</p>
    </div>
  );
};

export default function CompanyValues() {
  const values = [
    {
      title: "Clean Ingredients",
      description:
        "We carefully select ingredients that are safe, effective, and kind to your skin and the environment.",
    },
    {
      title: "Cruelty-Free",
      description:
        "We never test on animals and work only with ethical suppliers who share our commitment.",
    },
    {
      title: "Sustainability",
      description:
        "Our packaging is designed to minimize waste and environmental impact without compromising quality.",
    },
    {
      title: "Inclusivity",
      description:
        "We create products that work for all skin types, tones, and concerns, because beauty is for everyone.",
    },
  ];

  return (
    <div className="w-[88%] m-auto py-16">
      <h2 className="text-[#c28b7a] font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <Value
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
}
