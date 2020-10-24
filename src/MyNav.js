import React, { Component } from 'react';
import { Navbar, FormControl, Form, Button, Nav } from 'react-bootstrap';

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Sports Book</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Upcoming Games</Nav.Link>
          <Nav.Link href="/past-games">Past Games</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
  }
}

export default MyNav;
