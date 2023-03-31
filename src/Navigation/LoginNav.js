import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
// import { useNavigate } from "react-router-dom";

const LoginNav = () => {
    // const navigate = useNavigate();


  return (
    <div>
   <Navbar bg="black" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{color:"white"}} >Electronics</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{marginLeft:"970px" ,color:"white"}} >HOME</Nav.Link>
              <Nav.Link style={{color:"white"}} >SIGN-UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


export default LoginNav
