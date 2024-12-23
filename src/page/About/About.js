import React, { Fragment } from "react";
import prouctsimg from "../../assets/imgs/washface.jpg";
import face from "../../assets/imgs/face-regular-2.jpg";
import "./about.css";
function About() {
  return (
    <Fragment>
      <div className="w-[88%] m-auto p-auto my-10 res-height  ">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative  w-[55%] h-full rounded-md col-span-2">
            <img
              src={prouctsimg}
              className="rounded-md w-full h-full object-contain"
            />

            <img
              src={face}
              className="rounded-md absolute left-[66%] top-[25%] object-cover img-res "
            />
          </div>
          <div>
            <h2 className="text-[#c28b7a]">
              About <br />
              Company
            </h2>
            <p className="text-[#c28b7a] font-bold  tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.<br/>
              <p className="pt-10">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
