import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as sec from "../";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const cookies = new Cookies();
const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const cookieOptions = { maxAge: expirationTime, path: "/" };

export function Register() {
  const navigate = useNavigate();
  const [validPassword, setValidPassword] = useState(true);
  const [matchPassword, setMatchPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    passwordAuth: "",
  });

  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return capitalizedWords.join(" ");
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    return passwordRegex.test(password);
  }
  function passwordsMatch(password1, password2) {
    return password1 === password2;
  }

  const createUser = async () => {
    if (
      formValues.email &&
      formValues.firstname &&
      formValues.lastname &&
      formValues.password &&
      formValues.passwordAuth
    ) {
      try {
    setIsLoading(true)
        const response = await fetch(`https://pixolabai-server.onrender.com/api/v1/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password,
            firstname: formValues.firstname,
            lastname: formValues.lastname,
          }),
        });
        const data = await response.json();
        const { _id, email, firstname, lastname } = data.data;
        const displayName = `${firstname} ${lastname}`;
        //set up cookie
        cookies.set("id", _id, cookieOptions);
        cookies.set("email", email, cookieOptions);
        cookies.set("name", displayName, cookieOptions);
        //redirect
        navigate("/");
      } catch (error) {
        navigate("/server-error")
      }
    }
    //Loading stops
    setIsLoading(false)
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    //1.Valid password!
    const password = formValues.password;
    if (isValidPassword(password)) {
      const password1 = password;
      const password2 = formValues.passwordAuth;
      //2.Passwords match!
      if (passwordsMatch(password1, password2)) {
        setValidPassword(true);
        setMatchPassword(true);

        formValues.firstname = capitalizeWords(formValues.firstname);
        formValues.lastname = capitalizeWords(formValues.lastname);

        //3.Form validated successfully
        createUser();
      } else {
        //2.Passwords do not match.
        setValidPassword(false);
        setMatchPassword(false);
      }
    } else {
      //3.Invalid Password
      setValidPassword(false);
      alert(`\ncontain at least one uppercase letter
  \ncontain at least one lowercase letter 
  \nhave a length of at least 6 characters`);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center p-0 my-5">
      <div className="row w-100 align-items-center justify-content-center">
        {!isLoading ? (
          <Form
            onSubmit={onSubmit}
            className="col-sm-12 col-md-8 col-lg-5 border p-2 p-lg-5 p-md-4 p-sm-4 text-start my-auto h-auto"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={formValues.email || ""}
                name="email"
                onChange={(e) => handleOnChange(e)}
              />
              <Form.Text className="text-muted">
                Please enter your email here.
              </Form.Text>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={formValues.firstname || ""}
                  name="firstname"
                  onChange={(e) => handleOnChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={formValues.lastname || ""}
                  name="lastname"
                  onChange={(e) => handleOnChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group
              className={validPassword ? "mb-3" : "mb-3 text-danger"}
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password || ""}
                onChange={(e) => handleOnChange(e)}
              />
            </Form.Group>
            <Form.Group
              className={validPassword ? "mb-3" : "mb-3 text-danger"}
              controlId="formValidPassword"
            >
              <Form.Label>Re-enter Password</Form.Label>
              {!matchPassword ? (
                <span className="mx-3 text-danger">
                  Passwords do not match!
                </span>
              ) : null}
              <Form.Control
                required
                type="password"
                placeholder="Re-entry Password"
                name="passwordAuth"
                value={formValues.passwordAuth || ""}
                onChange={(e) => handleOnChange(e)}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <sec.LinksAuth />
            <div className="text-center">
              <Link className="px-1" to={`/policy`}>
                Privacy policy
              </Link>
            </div>
          </Form>
        ) : (
          <div className="d-flex flex-row justify-content-center gap-4">
            <h2>Loading</h2>
            <Spinner
              className="d-flex flex-column justify-content-center"
              animation="border"
              variant="primary"
            />
          </div>
        )}
        
      </div>
    </div>
  );
}
