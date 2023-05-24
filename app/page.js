import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const isLoggedIn = false;
  return (
    <main className="mx-5 pt-3 ">
      <h1 className="my-3 text-center">Artist Management System</h1>
      {isLoggedIn ? (
        <h1 className="">Redirect to dashboard</h1>
      ) : (
        <div className={`${styles.box} mx-auto p-3 py-5`}>
          <form className="">
            <div className="mb-3">
              <label for="username" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
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
      )}
    </main>
  );
}
