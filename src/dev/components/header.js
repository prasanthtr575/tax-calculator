import React from 'react'
import { Navbar,NavbarBrand,} from 'reactstrap';

    export default class Header extends React.Component {
        
        render() {
          return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand>Income Tax Calculator</NavbarBrand>
              </Navbar>
            </div>
          );
        }
      }