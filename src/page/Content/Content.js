import React, { Fragment } from "react";
import Form from "../../components/Form/Form";
function Content() {
  return (
    <>
      <div className="bg-[#faf7f5]">
        <div className="w-full py-10">
          <div className="w-[88%] m-auto h-full bg-[#faf7f5] flex justify-center item-center">
            <div className="text-center w-[50%]">
              <h2 className="text-[#c28b7a] tracking-wide">Content Us</h2>
              <p className="text-[#c28b7a] font-bold opacity-60 tracking-wide">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Form/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
