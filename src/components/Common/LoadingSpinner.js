import React from "react";

export default function LoadingSpinner({ color, size = 6 }) {
  return (
    <div className="loader flex z-50 justify-center items-center">
      <svg
        className={color ? null : `stroke-primary`}
        viewBox="25 25 50 50"
        stroke={color}
        width={`${size * 4}px`}>
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
