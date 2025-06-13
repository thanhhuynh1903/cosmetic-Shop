import React from "react"
export function BlogAuthor({ author }) {
  return (
    <div className="flex flex-col sm:flex-row items-center p-6 bg-rose-50 rounded-lg shadow-sm">
      <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
        <image
          src={author.avatar || "/placeholder.svg?height=80&width=80"}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-medium text-rose-500 text-lg mb-1">Written by {author.name}</h3>
        <p className="text-gray-600">{author.bio}</p>
      </div>
    </div>
  )
}
