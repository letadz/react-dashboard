import React from "react";

const FormGroup = ({ label, htmlFor, required, children }) => {
  return (
    <>
      <div>
        <label
          htmlFor={htmlFor}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>

        {children}
      </div>
    </>
  );
};

export default FormGroup;
