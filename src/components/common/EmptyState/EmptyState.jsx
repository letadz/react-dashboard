import React from "react";

const EmptyState = ({ title = "No items here", description = "" }) => {
  return (
    <div className="text-center py-4">
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default EmptyState;
