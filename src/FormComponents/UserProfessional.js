import React from "react";
import FormContainer from "./FormContainer";

const UserProfessional = ({ userData, handleChange }) => {
  return (
    <div>
      <FormContainer title="User Professional">
        <label htmlFor="qualifictaion">Qualification</label>
        <input
          type="text"
          name="Qualification"
          id="qualifictaion"
          required
          value={userData.Qualification || ""}
          onChange={handleChange}
        />
        <label htmlFor="lastjob">Last Job Title</label>
        <input
          type="text"
          name="Lastjob"
          id="lastjob"
          required
          value={userData.Lastjob || ""}
          onChange={handleChange}
        />
        <label htmlFor="experience">Years Of Professional Experience</label>
        <input
          type="number"
          name="Experience"
          id="experience"
          required
          value={userData.Experience || ""}
          onChange={handleChange}
        />
        <label htmlFor="organization">Name Of Organization</label>
        <input
          type="text"
          name="Organization"
          id="organization"
          required
          value={userData.Organization || ""}
          onChange={handleChange}
        />
      </FormContainer>
    </div>
  );
};

export default UserProfessional;
