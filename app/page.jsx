"use client";
import Link from "next/link";
import { useAMSContext } from "./Context/store";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();
  const { userData, setUserData } = useAMSContext();
  const userRef = useRef();
  const passRef = useRef();
  const [err, setErr] = useState({ location: "", message: "" });

  const isLoggedIn = () => {
    const client = JSON.parse(Cookies.get("user"));

    if (client.role === "admin") {
      router.push("/admindashboard");
    }
    if (client.role === "user") {
      router.push("/user");
    }
    if (client.role === "artist") {
      router.push("/artist");
    }
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
        Cookies.set("user", JSON.stringify(loggedUser));
        isLoggedIn();
      }
    }
  };

  return (
    <main className="login-main">
      <h2 className="text-center login-heading">Artist Management System</h2>
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
      <div className="text-center mt-3">
        <p>
          Please use following username. Password is <strong>123</strong> for
          all user
        </p>
        <p>
          For Admin:
          <span>
            <strong>Manish</strong>
          </span>
        </p>
        <p>
          For User:{" "}
          <span>
            <strong>Bhupesh</strong>
          </span>
        </p>
        <p>
          For Artist:{" "}
          <span>
            <strong>Ram</strong>
          </span>
        </p>
      </div>
    </main>
  );
}
