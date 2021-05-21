import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Image
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="homepg">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ALCHEMY</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>

        <Image className="fp1" src="frontpage-1.gif"
          alt="user pic" />
          <Image className="fp2" src="frontpage-2.gif"
          alt="user pic" />
      </div >
    );
  }
}

export default App;



