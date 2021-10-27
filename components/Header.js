import React from 'react';
// import { useContext } from 'react';

import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container, Image} from 'react-bootstrap';

import Logo from "../assets/img/logo.jpeg";
import SearchBar from "../components/SearchBar.js";

import { VscAccount } from "react-icons/vsc";

// import LocationContext from '../context/LocationContext.js';

const Header = () => {


    return (

        <header className="headerContainer">
            <Navbar className="navbar" expand="sm">
                <Container>

                    <Link to="/">
                        <Image className="logo" src={Logo} roundedCircle />
                        <div id="companyName"> Bored Buster Entertainment </div>
                    </Link>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}

                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
                        <Nav className="me-auto">
                            <Link to="/movies" name="movies" >Movies</Link>
                            <Link to="/tvShows" name="tvShows" >TV</Link>
                        </Nav>

                        <Nav>
                            {/* <VscAccount/> */}
                                <NavDropdown title="symbol" id="basic-nav-dropdown" >
                                <VscAccount/>
                                    <Link to="/register"> Register </Link> 
                                    <NavDropdown.Divider />
                                    <Link to="/login"> Log In </Link> 
                                    <NavDropdown.Divider />
                                </NavDropdown>
                            {/* <VscAccount/> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <SearchBar/>           
         </header>
    )
}

export default Header
