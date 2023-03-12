import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();
const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const cookieOptions = { maxAge: expirationTime, path: '/'};

export function LinksAuth() {
  const navigate = useNavigate();
  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
    
      const { uid, email, displayName } = result.user;
       //set up cookie
      cookies.set("id",uid, cookieOptions)
      cookies.set("email",email, cookieOptions)
      cookies.set("name",displayName, cookieOptions)
      //redirect
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-column border-top position-relative my-5 py-5 text-center">
      <div className="d-flex-inline flex-column justify-content-center px-4 bg-body position-absolute top-0 start-50 translate-middle">
        <span className="fs-5 fw-bold">or</span>
      </div>
      <h2>Join Today</h2>
      <h5 className="py-4">Sign in with one of the providers</h5>
      <button className="btn btn-dark py-3" onClick={GoogleLogin}>
        <span className="px-3">
          <FcGoogle />
        </span>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
