import React from 'react'

import SearchBar from "../components/SearchBar.js"
// import Logo from "../assets/img/logo.jpeg"

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="logo">
                {/* <Logo /> */}
            </div>
            <SearchBar/>
            <nav className="navBar">
                <ul className="menuBar">
                    <li className="menuItems" id="logIn"> Log In </li>
                    <li className="menuItems" id="signUp"> Sign Up </li>
                    <li className="menuItems" id="movies"> Movies </li>
                    <li className="menuItems" id="tvShows"> Tv Shows </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header
