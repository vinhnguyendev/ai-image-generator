import React, { useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

export function UserLogin() {
  const navigate = useNavigate();
  const [signingUp, setSigningUp] = useState(false);

  const [form, setForm] = useState({
    email: "test@test.com",
    firstname: "test",
    lastname: "test",
    password: "test12345",
  });

  const handleSubmit = async () => {
    if (signingUp) {
      try {
        const response = await fetch("https://pixolabai-server.onrender.com/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        })
        console.log(response)
        ;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogOut = () => {
    cookies.remove('name');
    cookies.remove('id');
    cookies.remove('email');
    navigate(`/login`)
  }

  return (
    <div id="login-nav" className="rounded-5">
      {cookies.get("name")? (
        <div id="user-nav" className="d-flex flex-row">
          <Avatar  username={cookies.get('name')} />
          <span
            id="login_breaker"
            className="d-flex flex-column justify-content-center px-1"
          >
            {" "}
            |{" "}
          </span>
          <button 
          id="logout-btn" 
          className="border-0 rounded-5 px-2 py-1"
          onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-center">
          <Link
            to={`/login`}
            id="login-btn"
            className="border-0 rounded-5 px-2 py-1 text-decoration-none text-dark"
            onClick={e => setSigningUp(false)}
          >
            Log In
          </Link>
          <span className="d-flex flex-column justify-content-center px-1">
            {" "}
            |{" "}
          </span>
          <Link
              to={`/register`}
            id="signup-btn"
            className="border-0 rounded-5 px-2 py-1 text-decoration-none text-dark"
            // onClick={e => setSigningUp(true)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
