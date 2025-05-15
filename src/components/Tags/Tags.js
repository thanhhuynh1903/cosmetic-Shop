"use client"

import { useState } from "react"

export default function Tags({ tags, setTagFilter }) {
  const [selectedTag, setSelectedTag] = useState(null)

  // Get all unique tags
  const allTags = tags?.flatMap((product) => product?.tag_list)
  const uniqueTags = [...new Set(allTags)].filter(Boolean) // Filter out null/undefined

  const handleTagClick = (tag) => {
    // If clicking the already selected tag, deselect it
    if (selectedTag === tag) {
      setSelectedTag(null)
      setTagFilter(null)
    } else {
      setSelectedTag(tag)
      setTagFilter(tag)
    }
  }

  // If no tags, don't render the component
  if (!uniqueTags.length) return null

  return (
    <div className="mt-4 md:mt-6">
      <p className="text-sm md:text-md font-medium mb-2 text-gray-700">Tags</p>
      <div className="flex flex-wrap gap-1.5">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`
              px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-300
              ${
                selectedTag === tag
                  ? "bg-[#C28B7A] text-white border border-[#C28B7A]"
                  : "border border-[#C28B7A] text-[#C28B7A] hover:bg-[#f8f0ed]"
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
