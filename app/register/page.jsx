"use client";

import Link from "next/link";
import { useState } from "react";
import { useAMSContext } from "../Context/store";

export default function Register() {
  const { userData, setUserData } = useAMSContext();
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    role: false,
    password: "",
    confirmpassword: "",
  });

  const [err, setErr] = useState({ position: "", msg: "" });
  const { firstname, lastname, username, role, password, confirmpassword } =
    userDetails;
  const handleInputChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRoleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, role: e.target.checked }));
    console.log(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword || password === "") {
      setErr((prev) => ({
        ...prev,
        position: "password",
        msg: "Password Mismatch",
      }));
      return;
    }
    const found = userData.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
    if (found) {
      setErr((prev) => ({
        ...prev,
        position: "username",
        msg: "User already exists. Pick a different Email.",
      }));
      return;
    }
    if (role === true) {
      var sendingRole = "artist";
    }
    if (role === false) {
      var sendingRole = "user";
    }
    let id = userData.length;
    let x = userData;
    x.push(userDetails);
    setUserData(x);
    console.log("EOF");
  };

  return (
    <div className="p-3 register-main">
      <h2 className="">AMS Registration</h2>
      <form className="">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            name="firstname"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            name="lastname"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="username"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label me-3">
            Are you an artist?
          </label>
          <input
            name="role"
            onChange={handleRoleChange}
            type="checkbox"
            className="form-check-input"
            id="role"
            aria-describedby="role"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="password"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            name="confirmpassword"
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="confirmPassword"
            autoComplete="off"
          />
        </div>

        <div className="text-center mt-5">
          <button
            onClick={handleFormSubmit}
            className="btn btn-success"
            type="submit"
          >
            Register
          </button>
          <Link href="/">
            <button className="btn btn-warning ms-5">Go Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
