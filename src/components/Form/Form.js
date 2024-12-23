import React from "react";
import './form.css';
export default function Form() {
  return (
    <div className="flex">
      <div className="w-full">
        <input
        placeholder="Enter your email"
          type="text"
          id="large-input"
          className="block w-[100%] p-4 mt-5 text-gray-900 border border-[#c28b7a] rounded-lg
          bg-[#faf7f5] sm:text-md  dark:bg-[gray-700] 
           placeholder- "
        />
      </div>
      <button className="block w-[20%] p-4 mt-5 text-gray-900 border border-[#c28b7a] rounded-lg ml-4
          bg-[#faf7f5] sm:text-md  dark:bg-[gray-700] 
          custom-button text-[#c28b7a]" >SIGN UP</button>
    </div>
  );
}
// #c28b7a
