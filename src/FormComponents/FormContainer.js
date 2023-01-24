import React from "react";

const FormContainer = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-center text-4xl py-3 font-bold ">{title}</h1>
      <div className="flex flex-col gap-3  mt-10 bg-white">{children}</div>
    </div>
  );
};

export default FormContainer;
