function Form() {
  return (
    <form className="mt-6 md:mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 md:py-3 rounded-md border border-[#c28b7a] bg-white focus:outline-none focus:ring-2 focus:ring-[#c28b7a] transition-all"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 md:py-3 rounded-md border border-[#c28b7a] bg-white focus:outline-none focus:ring-2 focus:ring-[#c28b7a] transition-all"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 md:py-3 rounded-md border border-[#c28b7a] bg-white focus:outline-none focus:ring-2 focus:ring-[#c28b7a] transition-all"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#c28b7a] text-white py-2 md:py-3 px-6 md:px-8 rounded-md hover:bg-[#b27a69] transition-colors w-full md:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default Form
