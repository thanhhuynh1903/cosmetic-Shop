import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-[#c89687] w-full">
      <div className="w-[88%] h-full m-auto p-auto py-[50px]">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 mr-[50px]">
            <Link to="/">
              <h1 className="custom-logo">Beauty</h1>
            </Link>
            <p className="text-white text-sm opacity-75">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <span className="text-lg pb-2">About</span>
            <Link className="">About us</Link>
            <Link>Contact</Link>
          </div>
          <div className="flex flex-col text-white ">
            <span className="text-lg pb-2">Social</span>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
          </div>
          <div className="flex flex-col text-white">
            <span className=" text-lg pb-2">
              Term & policies
            </span>
              <Link>Term & service</Link>
              <Link>Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
