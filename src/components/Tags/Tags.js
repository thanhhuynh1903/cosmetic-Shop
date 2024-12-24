import React from "react";
import { Link } from "react-router-dom";

export default function Tags({tags}) {
    //mai doc hieu lai code phan nay
    const allTags = tags?.flatMap((product) => product?.tag_list);
    const uniqueTags = [...new Set(allTags)];
  return (
    <div className="mt-3">
      <p className="text-md">Tags</p>
      <div className="flex flex-wrap">
        {uniqueTags.map((tag) => (
          <Link
          key={tag}
            className="border-solid border-2 border-indigo-600 m-1 text-[13px] p-1 hover:bg-black hover:text-white transition-background duration-500"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
