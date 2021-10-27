import React from 'react';
// import { useContext } from 'react';
import { useState } from 'react';

import { useEffect } from 'react';


/* Importing Components */
import Header from "../components/Header.js"
import Hero from "../components/Hero.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

// /* Importing Context */
// import FTMoviesContext from '../context/FTMoviesContext.js';
// import TVshowsContext from '../context/FTTVShowsContext.js';
// import AllNewReleases from '../context/AllNewReleasesContext.js';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';

const HomePage = () => {

    // const {allFTMovies, setAllFTMovies} = useContext(FTMoviesContext);
    // const {allFTTVshows, setAllFTTVshows} = useContext(TVshowsContext);
    // const {allNewReleases, setAllNewReleases} = useContext(AllNewReleases);   

    const [allFTMovies, setAllFTMovies] = useState([]); 
    const [allFTTVshows, setAllFTTVshows] = useState([]); 
    const [allNewReleases, setAllNewReleases] = useState([]); 


    useEffect(()=>{

        const fetchData = new RESTAPI();

        fetchData.getAPIData(`http://localhost:3500/movies?featMovie=true`, "GET")
        .then((data) => {

            setAllFTMovies(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows?featTV=true`, "GET")
        .then((data) => {

            setAllFTTVshows(data.data)
        })

        
        fetchData.getAPIData(`http://localhost:3500/movies?isNewMovie=y`, "GET")
        .then((data) => {

            setAllNewReleases(data.data)
        })  
    
      },[]);

    return (

        <div className="HomePage">
            
            <Header/>
            <Hero/>
                <main>
                    <h3 className="sectionHeading"> 
                        Feat. Movies
                    </h3>
                    <ListingContainer info={allFTMovies}/>

                    <h3 className="sectionHeading"> 
                        Feat. TV Shows 
                    </h3>
                    <ListingContainer info={allFTTVshows}/>
                    
                    <h3 className="sectionHeading"> 
                        New Releases
                    </h3>
                    <ListingContainer info={allNewReleases}/>
                </main>
            <Footer/>         

        </div>
    )
}

export default HomePage;
