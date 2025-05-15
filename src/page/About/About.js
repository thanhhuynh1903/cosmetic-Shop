import React, { Fragment } from "react";
import prouctsimg from "../../assets/imgs/washface.jpg";
import face from "../../assets/imgs/face-regular-2.jpg";
import "./about.css";
function About() {
  return (
    <Fragment>
      <div className="w-[88%] m-auto p-auto my-10 ">
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
              Welcome to our world of beauty — where skincare meets science and
              self-care becomes a ritual. We believe in enhancing your natural
              glow with clean, effective, and cruelty-free cosmetics.
              <br />
              <p className="pt-10">
                From hydrating serums to vibrant lip shades, our products are
                thoughtfully crafted to suit every skin type. Experience the
                confidence of healthy, radiant skin with formulas you can trust.
              </p>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
