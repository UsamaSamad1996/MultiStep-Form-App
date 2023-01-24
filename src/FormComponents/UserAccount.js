import React from "react";
import FormContainer from "./FormContainer";

const UserAccount = ({ userData, handleChange }) => {
  return (
    <div>
      <FormContainer title="User Account">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="Username"
          id="username"
          required
          value={userData.Username || ""}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="Email"
          id="email"
          required
          value={userData.Email || ""}
          onChange={handleChange}
        />
        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          name="Password"
          id="password"
          required
          value={userData.Password || ""}
          onChange={handleChange}
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          id="confirmpassword"
          required
          value={userData.ConfirmPassword || ""}
          onChange={handleChange}
        />
      </FormContainer>
    </div>
  );
};

export default UserAccount;
