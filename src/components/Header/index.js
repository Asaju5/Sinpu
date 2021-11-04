import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();
  const { user } = state;

  const logout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("http://localhost:4000/api/logout");
    toast(data.message);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  };
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
            {user === null && (
              <>
                {" "}
                <Link to="/">Teach</Link>
                <Link to="/">Categories</Link>
                <Link to="/login">Login</Link>
                <Link to="register">Register</Link>
              </>
            )}

            {user !== null && (
              <button type="submit" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
