import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="container mx-auto px-2">
        <nav className="py-4 flex justify-between">
          <div className="flex flex-row ">
            <Link
              to="/home"
              className="px-2 text-xl font-bold text-center my-auto uppercase"
            >
              SINPU
            </Link>
          </div>
          <div className="flex flex-row justify-center my-auto space-x-4">
            <Link to="/">Teach</Link>
            <Link to="/">Categories</Link>
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
