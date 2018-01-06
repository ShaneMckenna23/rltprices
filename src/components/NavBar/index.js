import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {Navbar,NavItem,MenuItem,Nav,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class NavBar extends Component {
  
    render () {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                <LinkContainer to="/">
                  <a>RLTPrices</a>
                  </LinkContainer>
                </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/prices"><NavItem eventKey={1}>Price Checker</NavItem></LinkContainer>
                <LinkContainer to="/giveaway"><NavItem eventKey={2}>Giveaway</NavItem></LinkContainer>
                <LinkContainer to="/addItem"><NavItem eventKey={5}>Add Item</NavItem></LinkContainer>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1}>Login</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar
