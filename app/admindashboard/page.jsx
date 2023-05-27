"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const logOut = () => {
    Cookies.remove("user");
    router.push("/");
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container ">
      <div className="col-md-12 d-flex mt-3">
        <h1 className="ms-auto">Admin dashboard</h1>
        <button className="btn btn-danger ms-auto" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
      <div className="col-md-12">
        {user != null && (
          <>
            {user.map((user) => (
              <div>{user.name}</div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
