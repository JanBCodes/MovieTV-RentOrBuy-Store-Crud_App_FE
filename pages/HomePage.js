import React from 'react';
import { useContext } from 'react';


/* Importing Components */
import Header from "../components/Header.js"
import Hero from "../components/Hero.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

/* Importing Context */
import FTMoviesContext from '../context/FTMoviesContext.js';
import TVshowsContext from '../context/FTTVShowsContext.js';
import AllNewReleases from '../context/AllNewReleasesContext.js';


const HomePage = () => {

    const {allFTMovies} = useContext(FTMoviesContext);
    const {allFTTVshows} = useContext(TVshowsContext);
    const {allNewReleases} = useContext(AllNewReleases);   

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
