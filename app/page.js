"use client";
import Link from "next/link";
import { useAMSContext } from "./Context/store";
import { useRef } from "react";

export default function Home() {
  const isLoggedIn = false;
  const { userData, setUserData } = useAMSContext();
  const userRef = useRef();
  const passRef = useRef();

  const onLogin = (e) => {
    e.preventDefault();
    if (
      (userRef.current.value != null || undefined || "  ") &
      (passRef.current.value != null || undefined || "  ")
    ) {
      console.log("this is start***", userRef.current.value, "***this is end");
      console.log(userData.admin);
    }
  };

  return (
    <main className="login-main">
      <h2 className="text-center login-heading">Artist Management System</h2>
      {isLoggedIn ? (
        <h1 className="">Redirect to dashboard</h1>
      ) : (
        <div className="box mx-auto mt-5">
          <form className="">
            <div className="mb-3">
              <label htmlFor="username" className="form-label ih">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                ref={userRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label ih">
                Password
              </label>
              <input
                ref={passRef}
                type="password"
                className="form-control"
                id="password"
              />
            </div>

            <div className="text-center mt-3">
              <button
                onClick={(e) => onLogin(e)}
                type="submit"
                className="btn btn-primary me-3"
              >
                Login
              </button>
              <Link href="/register">
                <button className="btn btn-success">Register</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
