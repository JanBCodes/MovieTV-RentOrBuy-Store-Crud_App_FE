import React from 'react'

import { Navbar, Nav} from 'react-bootstrap'
import { VscGithub } from "react-icons/vsc";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <Navbar className="navbar" expand="lg">
                <div>
                    Designed and Developed by Janielle Bacchus
                </div>
                <Nav.Link href="https://www.facebook.com/janielle.bacchus" target="_blank"> <SiFacebook/> </Nav.Link>
                <Nav.Link href="https://github.com/JanBCodes" target="_blank"> <VscGithub/> </Nav.Link>
            </Navbar>
        </footer>
    )
}

export default Footer
