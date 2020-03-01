import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux'
import { logUsername, isLoggedIn } from '../redux/action'


const NavbarCustom = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const logged = useSelector(state => state.logUser.isLoggedIn)

  const dispatch = useDispatch()

  const logOut = () => {
    toggleNavbar()
    dispatch(logUsername(null))
    dispatch(isLoggedIn())
  }

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">TOKO SUSILO</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link onClick={toggleNavbar} to='/'>Home</Link>
            </NavItem>
            { 
              logged ?
              <div>
              <NavItem>
                <Link onClick={toggleNavbar} to='/method'>Methods</Link>
              </NavItem>
              <NavItem>
                <Link onClick={logOut} to='/'>Log Out</Link>
              </NavItem>
              </div>
              :
              <div>
              <NavItem>
                <Link onClick={toggleNavbar} to='/login'>Log In</Link>
              </NavItem>
              <NavItem>
                <Link onClick={toggleNavbar} to='/register'>Register</Link>
              </NavItem>
              </div>
            }  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;