import React from 'react';
import { useContext } from 'react';

/* Importing Components */
import Header from "../components/Header.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

/* Importing Context */
import AllMoviesContext from '../context/AllMoviesContext.js';
import AllTVShowsContext from '../context/AllTVShowsContext.js';

const ListingPage = () => {

    let location = window.location.pathname
    let dataArray;

    const {allMovies} = useContext(AllMoviesContext);
    const {allTVShows} = useContext(AllTVShowsContext);


    console.log(allMovies)
    console.log(allTVShows)

    if(location === "/movies")
    {
        dataArray = allMovies;
    }

    else if(location === "/tvShows") // Returning as Undefine *fix* might have to use state
    {
        dataArray = allTVShows;
    }

    return (

        <div className="listingPage">
            
            <Header/>

            <h3 className="sectionHeading"> 
                All
            </h3>

            <ListingContainer info={dataArray}/>

            <Footer/>         

        </div>
    )
}

export default ListingPage
