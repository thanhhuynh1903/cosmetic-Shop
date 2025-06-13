export default function MissionVision() {
  return (
    <div className="bg-[#f8f3f1] py-16">
      <div className="w-[88%] m-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-[#c28b7a] font-bold text-2xl mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To create beauty products that enhance natural beauty while prioritizing skin health. We're committed to
            formulating products that are effective, safe, and environmentally responsible, making self-care accessible
            to everyone.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-[#c28b7a] font-bold text-2xl mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To revolutionize the beauty industry by setting new standards for product quality, ingredient transparency,
            and sustainability. We envision a world where beauty routines are moments of joy that contribute to overall
            wellbeing and confidence.
          </p>
        </div>
      </div>
    </div>
  )
}
