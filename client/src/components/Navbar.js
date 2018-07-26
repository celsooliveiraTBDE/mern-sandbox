import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,NavLink,

} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render(){
  return(
        <Navbar color="light" light expand="md" >
  <NavbarBrand href="/">Yelp Fusion Search</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link}to="/">Search</NavLink>
      </NavItem>
      <NavItem>
      <NavLink tag={Link}to="locations">My Locations</NavLink>
      </NavItem>
      <NavItem>
      <NavLink tag={Link}to="/locations/:id">Details</NavLink>
      </NavItem>
      <NavItem>
      <NavLink tag={Link}to="/reviews">Reviews</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/events">Events</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/contact">Contact</NavLink>
        </NavItem>
    </Nav>
  </Collapse>
</Navbar>
    )}
}