import React from "react";
import soup from "../../assets/imgs/0x0.jpg";
import natural from "../../assets/imgs/collection-width.png";
import lotion from "../../assets/imgs/lotion (2).png";
import suatam from "../../assets/imgs/suatam.png";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="my-5 ">
      <div>
        <div className="w-[88%] h-full m-auto p-auto grid grid-cols-2 gap-4">
          <div className="rounded-lg relative ">
            <img src={soup} className="object-fit w-full h-full rounded-lg" />
            <Link>
              <button className="bg-[#c28b7a] text-white pl-[30px] pr-[30px] rounded-md text-lg absolute bottom-[15px] text-center right-[40%]">
                Soup
              </button>
            </Link>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <div className="rounded-lg relative">
              <img src={lotion} className="rounded-lg object-cover w-full" />
              <Link>
                <button className="bg-[#c28b7a] text-white pl-[30px] pr-[30px] rounded-md text-lg absolute bottom-[15px] text-center right-[30%]">
                  Lotion
                </button>
              </Link>
            </div>
            <div className="rounded-lg relative">
              <img src={suatam} className="rounded-lg" />
              <Link>
                <button className="bg-[#c28b7a] text-white pl-[30px] pr-[30px] rounded-md text-lg absolute bottom-[15px] text-center right-[30%]">
                  Shower
                </button>
              </Link>
            </div>
            <div className="col-span-2 rounded-lg relative">
              <img src={natural} className="rounded-lg" />
              <Link>
                <button className="bg-[#c28b7a] text-white pl-[30px] pr-[30px] rounded-md text-lg absolute bottom-[15px] text-center right-[40%]">
                  Natural
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
