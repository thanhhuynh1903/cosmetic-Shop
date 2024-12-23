import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import routes from "../../route/routes";
import laning from "../../assets/imgs/header.png";
function Home() {
  return (
    <>
      <div className="bg-[#faf7f5]">
        <div className="w-full">
          <div className="w-[88%] h-full m-auto p-auto py-[126px] grid grid-cols-2">
            <div className="py-10">
            {/* we can use d-inline-block split two columns */}
              <h1 className="text-[#c28b7a] tracking-wide">
                Natural Skincare <br />
                Daily Routine
              </h1>
              <p className="text-[#c28b7a] font-bold opacity-40 tracking-wide	">
                Nurturing beauty is not only nurturing the spirit, <br /> but it
                is also nurturing the human personality.
              </p>
              <div>
                <div>
                  <Link to={routes.products}>
                    <button className="bg-[#c28b7a] text-white py-3 px-8 my-8 rounded-md text-lg">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={laning}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
