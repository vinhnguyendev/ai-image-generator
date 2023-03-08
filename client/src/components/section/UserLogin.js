import React, { useState } from "react";
import { Avatar } from "./Avatar";

export function UserLogin(username) {
  const [logedIn, setLogedIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  const [form, setForm] = useState({
    email: "test@test.com",
    firstname: "test",
    lastname: "test",
    password: "test12345",
  });

  //need to create separate component
  const handleSubmit = async () => {
    if (signingUp) {
      try {
        const response = await fetch("http://localhost:5050/api/v1/user", {
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

  return (
    <div id="login-nav" className="rounded-5">
      {logedIn ? (
        <div id="user-nav" className="d-flex flex-row">
          <Avatar username="Jon Doe" />
          <span
            id="login_breaker"
            className="d-flex flex-column justify-content-center px-1"
          >
            {" "}
            |{" "}
          </span>
          <button id="logout-btn" className="border-0 rounded-5 px-2 py-1">
            Log out
          </button>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-center">
          <button
            id="login-btn"
            className="border-0 rounded-5 px-2 py-1"
            onClick={e => setSigningUp(false)}
          >
            Log In
          </button>
          <span className="d-flex flex-column justify-content-center px-1">
            {" "}
            |{" "}
          </span>
          <button
            id="signup-btn"
            className="border-0 rounded-5 px-2 py-1"
            onClick={e => setSigningUp(true)}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}
