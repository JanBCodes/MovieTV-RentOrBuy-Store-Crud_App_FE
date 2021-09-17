import React from 'react'

import Header from "../components/Header.js"
import Hero from "../components/Hero.js"
import Listing from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

import { useEffect } from 'react';



const HomePage = () => {

    useEffect(()=>{

        fetch("http://localhost:3500/movies?featMovie=true")
        
        .then(res => res.json())
        .then(data => {
          
            console.log(`${data.message}`) 
            console.log(data)
        })

        fetch("http://localhost:3500/tvShows?featTV=true")
        
        .then(res => res.json())
        .then(data => {
          
            console.log(`${data.message}`) 
            console.log(data)
        })

        fetch("http://localhost:3500/movies?isNewMovie=y")
        
        .then(res => res.json())
        .then(data => {
          
            console.log(`${data.message}`) 
            console.log(data)

        })
    
      },[]);

      

    return (
        <div className="HomePage">
            
            <Header/>
            <Hero/>

            <h3 className="sectionHeading"> 
                Feat. Movies
            </h3>
            <Listing/>

            <h3 className="sectionHeading"> 
                Feat. TV Shows 
            </h3>
            <Listing/>            
            
            <h3 className="sectionHeading"> 
                New Releases
            </h3>
            <Listing/>

            <Footer/>         

        </div>
    )
}

export default HomePage;
