import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
       <Navbar bg="primary" variant="dark" default collapseOnSelect>
            <Navbar.Brand href="/">
                Infispace
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    )
  }
}
