import { useState } from "react";

export default function AddArtist() {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    role: false,
  });
  const handleInputChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container col-md-6 box">
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
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            name="username"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="text-center ">
          <button
            onClick={handleFormSubmit}
            className="btn btn-success"
            type="submit"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
