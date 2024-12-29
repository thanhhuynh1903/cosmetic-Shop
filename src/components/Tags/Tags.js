import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Tags({tags,setTagFilter}) {
  const [selectedTag, setSelectedTag] = useState(null);
    //mai doc hieu lai code phan nay
    const allTags = tags?.flatMap((product) => product?.tag_list);
    const uniqueTags = [...new Set(allTags)];
    const handleTagClick = (tag) => {
      setSelectedTag(tag);
      setTagFilter(tag);
    };
  
  return (
    <div className="mt-3">
      <p className="text-md">Tags</p>
      <div className="flex flex-wrap">
        {uniqueTags.map((tag) => (
          <Link
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`border-solid border-2 border-indigo-600 m-1 text-[13px] p-1 transition-background duration-500 ${
            selectedTag === tag ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
