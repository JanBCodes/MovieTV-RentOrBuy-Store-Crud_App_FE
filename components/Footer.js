import React from 'react'

import { Navbar } from 'react-bootstrap';
import { VscGithub } from "react-icons/vsc";
import { SiFacebook } from "react-icons/si";

import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footerContainer">
            <Navbar className="navbar" expand="xlg">
                <div>
                    Designed and Developed by Janielle Bacchus
                </div>
                <div>
                    <Link to="https://www.facebook.com/janielle.bacchus" target="_blank"> <SiFacebook/> </Link>
                </div>
                <div>
                    <Link to="https://github.com/JanBCodes" target="_blank"> <VscGithub/> </Link>
                </div>
            </Navbar>
        </footer>
    )
}

export default Footer
