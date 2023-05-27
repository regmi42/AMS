import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("user");
  let url = req.url;
  if (
    verify === undefined &&
    (url.includes("/admindashboard") ||
      url.includes("/user") ||
      url.includes("/artist"))
  ) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify != undefined) {
    let role = JSON.parse(verify.value).role;
    if (role === "admin") {
      NextResponse.redirect("http://localhost:3000/admindashboard");
    } else if (role === "user") {
      NextResponse.redirect("http://localhost:3000/user");
    } else if (role === "artist") {
      NextResponse.redirect("http://localhost:3000/artist");
    }
  }
}
