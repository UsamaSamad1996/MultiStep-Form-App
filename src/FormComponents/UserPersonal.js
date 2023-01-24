import React from "react";
import FormContainer from "./FormContainer";

const UserPersonal = ({ userData, handleChange }) => {
  return (
    <div>
      <FormContainer title="User Personal">
        <div className="flex flex-col mb-3">
          <label htmlFor="firstname" className="text-sm pb-1">
            FirstName
          </label>
          <input
            className="border-b-2 border-gray-500 focus:outline-none text-xl py-1"
            type="text"
            name="FirstName"
            id="firstname"
            required
            placeholder="FirstName"
            value={userData.FirstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="lastname" className="text-sm pb-1">
            LastName
          </label>
          <input
            className="border-b-2 border-gray-500 focus:outline-none text-xl py-1"
            type="text"
            name="LastName"
            id="lastname"
            required
            placeholder="LastName"
            value={userData.LastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="age" className="text-sm pb-1">
            Age
          </label>
          <input
            className="border-b-2 border-gray-500 focus:outline-none text-xl py-1"
            type="number"
            name="Age"
            id="age"
            required
            placeholder="Age"
            value={userData.Age || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="fathername" className="text-sm pb-1">
            Father's Name
          </label>
          <input
            className="border-b-2 border-gray-500 focus:outline-none text-xl py-1"
            type="text"
            name="FatherName"
            id="fathername"
            required
            placeholder="Father's Name"
            value={userData.FatherName || ""}
            onChange={handleChange}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default UserPersonal;
