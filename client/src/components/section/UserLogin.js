import React from "react";
import { Avatar } from "./Avatar";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

export function UserLogin() {
  const navigate = useNavigate();
  // const [signingUp, setSigningUp] = useState(false);

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
          
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
