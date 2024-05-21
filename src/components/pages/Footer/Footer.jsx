import React from "react";
import { getYear } from "date-fns";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-8 py-3">
      <span className="text-xs">
        Copyright © React Dashboard {getYear(new Date())}
      </span>
    </div>
  );
};

export default Footer;
