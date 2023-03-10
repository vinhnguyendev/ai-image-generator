import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as sec from "../";

export function Login({setLogedIn}){
  return (
    <div className='container  d-flex align-items-center justify-content-center p-0 my-5'>
      <div className='row w-100 h-auto align-items-center justify-content-center'>
    <Form className='col-sm-12 col-md-8 col-lg-5 border p-2 p-lg-5 p-md-4 p-sm-4 text-start my-auto h-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your email here.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-end'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      <sec.LinksAuth  setLogedIn={setLogedIn}/>
      <div className='text-center'>
      <a className='px-1' href='http://127.0.0.1:5500/client/public/policy.html'>Privacy policy</a>
      </div>
    </Form>
    </div>
    </div>
  );
}