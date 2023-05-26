"use client";
import Link from "next/link";
import { useAMSContext } from "./Context/store";
import { useRef, useState } from "react";

export default function Home() {
  const { userData, setUserData } = useAMSContext();
  const userRef = useRef();
  const passRef = useRef();
  const [err, setErr] = useState({ location: "", message: "" });
  const [role, setRole] = useState("");

  const isLoggedIn = () => {
    const client = JSON.parse(localStorage.getItem("user"));
    if (client.role === "admin") {
      setRole("admin");
    }
    if (client.role === "user") {
      setRole("user");
    }
    if (client.role === "artist") {
      setRole("artist");
    }
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setRole("");
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (userRef.current.value === "") {
      setErr((prev) => ({
        ...prev,
        location: "username",
        message: "Enter Username",
      }));
    } else if (passRef.current.value === "") {
      setErr((prev) => ({
        ...prev,
        location: "password",
        message: "Enter Password",
      }));
    } else {
      const user = userData.find(
        (user) =>
          user.username.toLowerCase() === userRef.current.value.toLowerCase() &&
          user.password === passRef.current.value
      );
      if (user === undefined) {
        return setErr((prev) => ({
          ...prev,
          location: "username",
          message: "Invalid Credentials",
        }));
      } else {
        const loggedUser = {
          id: user.userId,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          role: user.role,
        };
        localStorage.setItem("user", JSON.stringify(loggedUser));
        isLoggedIn();
      }
    }
  };

  return (
    <main className="login-main">
      <h2 className="text-center login-heading">Artist Management System</h2>
      {role === "" && (
        <div className="box mx-auto mt-5">
          <form className="">
            <div className="mb-3">
              <label htmlFor="username" className="form-label ih">
                UserName
                <span className="ms-5 text-danger">
                  {err.location === "username" && err.message}
                </span>
              </label>

              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                ref={userRef}
                required
                onChange={() => setErr({ location: "", message: "" })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label ih">
                Password
                <span className="ms-5 text-danger">
                  {err.location === "password" && err.message}
                </span>
              </label>
              <input
                ref={passRef}
                type="password"
                className="form-control"
                id="password"
                required
                autoComplete="off"
                onChange={() => setErr({ location: "", message: "" })}
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
                <button className="ms-3 btn btn-success">Register</button>
              </Link>
            </div>
          </form>
        </div>
      )}

      {role === "admin" && (
        <div>
          <h1 className="">Redirect to Admin dashboard</h1>
          <button className="btn btn-danger" onClick={() => logOut()}>
            LogOut
          </button>
        </div>
      )}
      {role === "artist" && (
        <div>
          <h1 className="">Redirect to Artist dashboard</h1>
          <button className="btn btn-danger" onClick={() => logOut()}>
            LogOut
          </button>
        </div>
      )}
      {role === "user" && (
        <div>
          <h1 className="">Redirect to User dashboard</h1>
          <button className="btn btn-danger" onClick={() => logOut()}>
            LogOut
          </button>
        </div>
      )}
    </main>
  );
}
