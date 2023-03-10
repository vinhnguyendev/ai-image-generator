import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as sec from "../";

export function Register(setLogedIn){
  return (
    <div className='container d-flex align-items-center justify-content-center p-0 my-5'>
    <div className='row w-100 align-items-center justify-content-center'>
    <Form className='col-sm-12 col-md-8 col-lg-5 border p-2 p-lg-5 p-md-4 p-sm-4 text-start my-auto h-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
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
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
         
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formValidPassword">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re-entry Password" />
      </Form.Group>
      <div className='d-flex justify-content-end'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      <sec.LinksAuth setLogedIn={setLogedIn}/>
      <div className='text-center'>
      <a className='px-1' href='http://127.0.0.1:5500/client/public/policy.html'>Privacy policy</a>
      </div>
    </Form>
    </div>
    </div>
  );
}