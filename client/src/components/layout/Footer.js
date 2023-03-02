import Container from "react-bootstrap/esm/Container";
import * as sec from "../";

export function Footer(){
   return(
   <div className="bg-primary text-center text-lg-left w-100  ">
    <Container>
    <sec.Copyright/> 
    </Container>  
    </div>
   )
};