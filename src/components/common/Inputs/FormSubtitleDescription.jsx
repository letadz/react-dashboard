import React from "react";

const FormTitleDescription = ({ subtitle, description }) => {
  return (
    <>
      <div>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {subtitle}
        </h5>
        <h6 className="text-sm text-gray-600">{description}</h6>
      </div>
    </>
  );
};

export default FormTitleDescription;
