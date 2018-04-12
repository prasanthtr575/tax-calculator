import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    export default class Header extends React.Component {
        constructor(props) {
          super(props);
        }
      
        render() {
          return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand center>TAX Calculator</NavbarBrand>
              </Navbar>
            </div>
          );
        }
      }