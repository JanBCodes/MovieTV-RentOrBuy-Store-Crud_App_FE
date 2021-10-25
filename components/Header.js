import React from 'react';
// import { useContext } from 'react';

import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container, Image} from 'react-bootstrap';

import Logo from "../assets/img/logo.jpeg";
import SearchBar from "../components/SearchBar.js";

// import LocationContext from '../context/LocationContext.js';

const Header = () => {

    // const {setRoute} = useContext(LocationContext);

    // const setRouteLocation = (evt) => {

    //     console.log(evt.target.name)
    //     setRoute({location: evt.target.name})

    // }

    return (

        <header className="headerContainer">
            <Navbar className="navbar" expand="sm">
                <Container>

                    <Link to="/">
                        <Image className="logo" src={Logo} roundedCircle />
                        <div id="companyName"> Bored Buster Entertainment </div>
                    </Link>
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                            <Nav className="me-auto" id="me-auto">
                                <Link to="/movies" name="movies" >Movies</Link>
                                <Link to="/tvShows" name="tvShows" >Tv Shows</Link>
                            </Nav>

                            <NavDropdown title="My Account" id="basic-nav-dropdown">
                                <Link to="/register"> Register </Link> 
                                <NavDropdown.Divider />
                                <Link to="/login"> Log In </Link> 
                            </NavDropdown>

                        </Navbar.Collapse>
                </Container>

            </Navbar>

            <SearchBar/>           
         </header>
    )
}

export default Header
