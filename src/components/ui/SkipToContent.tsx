import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-navy"
    >
      Skip to main content
    </a>
  );
};
