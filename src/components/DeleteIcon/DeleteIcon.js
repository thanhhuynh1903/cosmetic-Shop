import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteIcon({handleRemove}) {
  return (
    <div className="flex items-center rounded-full border-2 border-[#96a3b3] p-2 cursor-pointer " onClick={handleRemove}>
      <Trash2  width={15} height={15}/>
    </div>
  );
}
