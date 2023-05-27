"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function artist() {
  const router = useRouter();
  const logOut = () => {
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <div className="container ">
      <div className="col-md-12 d-flex mt-3">
        <h1 className="ms-auto">Artist dashboard</h1>
        <button className="btn btn-danger ms-auto" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
      <div className="col-md-12">test</div>
    </div>
  );
}
