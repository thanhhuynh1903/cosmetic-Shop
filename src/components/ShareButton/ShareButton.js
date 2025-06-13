import { Facebook, Twitter, Linkedin, Link } from "lucide-react"

export function ShareButtons() {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-500">Share:</span>
      <button className="p-2 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors">
        <Facebook size={16} />
        <span className="sr-only">Share on Facebook</span>
      </button>
      <button className="p-2 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors">
        <Twitter size={16} />
        <span className="sr-only">Share on Twitter</span>
      </button>
      <button className="p-2 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors">
        <Linkedin size={16} />
        <span className="sr-only">Share on LinkedIn</span>
      </button>
      <button className="p-2 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors">
        <Link size={16} />
        <span className="sr-only">Copy link</span>
      </button>
    </div>
  )
}
