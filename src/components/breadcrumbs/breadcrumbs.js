import React from "react";

export default function Breadcrumbs() {
  return (
    <nav className="p-4 text-gray-600 text-sm">
      <a href="#" className="hover:underline">
        NOTINO
      </a>{" "}
      &gt;{" "}
      <a href="#" className="hover:underline">
        For man
      </a>{" "}
      &gt;{" "}
      <a href="#" className="hover:underline">
        Body cosmetics
      </a>{" "}
      &gt;{" "}
      <a href="#" className="hover:underline">
        Deodorants and antiperspirants
      </a>
    </nav>
  );
}
