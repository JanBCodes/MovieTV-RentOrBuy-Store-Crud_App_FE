import React from 'react'

import Header from "../components/Header.js"
import Hero from "../components/Hero.js"
import Listing from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"




const HomePage = () => {

    return (
        <div className="HomePage">
            
            <Header/>
            <Hero/>
            <h3> 
                Feat. Movies
            </h3>
            <Listing/>
            <h3> 
                Feat. TV Shows 
            </h3>
            <Listing/>            
            
            <h3> 
                New Releases
            </h3>
            <Listing/>

            <Footer/>         

        </div>
    )
}

export default HomePage;
