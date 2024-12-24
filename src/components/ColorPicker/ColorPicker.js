import React from "react";

export default function ColorPicker({ color }) {
  console.log(color);
  console.log("hehe");

  return (
    <div className="flex flex-wrap">
      {color?.product_colors?.map((item) => (
        <div className="group relative flex justify-center">
          <div
            key={item.hex_value}
            className="m-1 flex items-center rounded-full border-2 border-[#96a3b3] p-2 cursor-pointer z-0"
            style={{ backgroundColor: item.hex_value }}
          ></div>

          <span class="w-max z-10 absolute top-6 scale-0 transition-all rounded border border-black p-1 text-xs text-black group-hover:scale-100">
            {item.colour_name}
          </span>
        </div>
      ))}
    </div>
  );
}
