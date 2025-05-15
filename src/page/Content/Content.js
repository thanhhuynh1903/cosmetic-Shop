import Form from "../../components/Form/Form"

function Content() {
  return (
    <>
      <div className="bg-[#faf7f5]">
        <div className="w-full py-8 md:py-10">
          <div className="w-[95%] md:w-[88%] m-auto h-full bg-[#faf7f5] flex justify-center items-center">
            <div className="text-center w-full md:w-[80%] lg:w-[60%] xl:w-[50%] px-4 md:px-0">
              <h2 className="text-[#c28b7a] tracking-wide text-2xl md:text-3xl lg:text-4xl mb-4">Contact Us</h2>
              <p className="text-[#c28b7a] font-bold opacity-60 tracking-wide mb-6 md:mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
