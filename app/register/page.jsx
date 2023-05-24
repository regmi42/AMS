import Link from "next/link";

export default function Register() {
  return (
    <div className="p-3">
      <h1>AMS Registration</h1>
      <form className="">
        <div className="mb-3">
          <label for="firstName" className="form-label">
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
          <label for="lastName" className="form-label">
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
          <label for="email" className="form-label">
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
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label for="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
          />
        </div>

        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary me-3">
            Login
          </button>
          <Link href="/register">
            <button className="btn btn-success">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
