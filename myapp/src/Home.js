import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Home() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-r">
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Home;
