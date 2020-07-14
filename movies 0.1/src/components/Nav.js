import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const Nav = (props) => {
  return (
    <>
      <ReactBootstrap.Navbar bg="danger" variant="dark">
        <img alt="icon" width="60" hieght="50" src="lamaflix.png" />
        <ReactBootstrap.Navbar.Brand href="#home"><h1>LAMAFLIX</h1></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="mr-auto">
        </ReactBootstrap.Nav>
        <ReactBootstrap.Nav.Link style={{color: 'white', textDecoration: 'none'}} href="#popular" onClick = {props.popularMovies}>Popular</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link style={{color: 'white', textDecoration: 'none'}} href="#foryou">For You</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Form inline onSubmit={props.handleSubmit}>
        <ReactBootstrap.FormControl type="text" placeholder="Search Movie..." className="mr-sm-2" onChange={props.handleChange} />
        <ReactBootstrap.Button variant="outline-info">GO</ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar>
      <br />
    </>
  );
}

export default Nav;