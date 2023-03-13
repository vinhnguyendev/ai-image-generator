import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as sec from "../";
import { useState } from 'react'

export function Login(){
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email))
    return emailRegex.test(email);
  }

  const onSubmit =  async (event) => {
    console.log(formValues)
    event.preventDefault();
    if(formValues.email && formValues.password){
    console.log(formValues)
  
    const email = formValues.email; 
    const isValid = isValidEmail(email); 
  
    if (isValid) {
      try{
        const response = await fetch(`https://pixolabai-server.onrender.com/api/v1/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formValues.email, password: formValues.password }),
        });
        const data = await response.json();
      }catch(error){
        console.log(error)
      }
     
    } else {
      console.log("Invalid email!");
    
    }
  }else if(formValues.password === null || undefined || ''){
    alert("Please enter your password")
  }else{
    alert("Please enter credentials to login")
  }
  }

  return (
    <div className='container  d-flex align-items-center justify-content-center p-0 my-5'>
      <div className='row w-100 h-auto align-items-center justify-content-center'>
    <Form onSubmit={onSubmit} className='col-sm-12 col-md-8 col-lg-5 border p-2 p-lg-5 p-md-4 p-sm-4 text-start my-auto h-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" value={formValues.email || ''} onChange={(e) => handleOnChange(e)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your email here.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" value={formValues.password || ''} onChange={(e) => handleOnChange(e)} placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-end'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      <sec.LinksAuth />
      <div className='text-center'>
      <a className='px-1' href='http://127.0.0.1:5500/client/public/policy.html'>Privacy policy</a>
      </div>
    </Form>
    </div>
    </div>
  );
}