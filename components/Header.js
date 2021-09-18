import React from 'react'

import { Navbar, NavDropdown, Nav, Container, Image} from 'react-bootstrap'

import Logo from "../assets/img/logo.jpeg";
import SearchBar from "../components/SearchBar.js";
// import Logo from "../assets/img/logo.jpeg"

const Header = () => {



    return (
        <header className="headerContainer">
            <Navbar className="navbar" expand="lg">
                <Container>

                    <Nav.Link href="/">
                        <Image className="logo" src={Logo} roundedCircle />
                    </Nav.Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="movies">Movies</Nav.Link>
                        <Nav.Link href="tvShows">Tv Shows</Nav.Link>
                    </Nav>

                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> Log In </NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>

                    {/* <SearchBar/> */}
            </Navbar>

            <SearchBar/>

           
         </header>
    )
}

export default Header
