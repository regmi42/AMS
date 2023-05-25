import Link from "next/link";

export default function Register() {
  return (
    <div className="p-3 register-main">
      <h2 className="">AMS Registration</h2>
      <form className="">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
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
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
          />
        </div>

        <div className="text-center mt-5">
          <Link href="/register">
            <button className="btn btn-success">Register</button>
          </Link>
          <Link href="/">
            <button className="btn btn-warning ms-5">Go Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
