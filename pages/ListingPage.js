import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Read up More


/* Importing Components */
import Header from "../components/Header.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

/* Importing Context */
import AllMoviesContext from '../context/AllMoviesContext.js';
import AllTVShowsContext from '../context/AllTVShowsContext.js';
import LocationContext from '../context/LocationContext.js';

const ListingPage = () => {

    let dataArray;
    let title;

    const {allMovies} = useContext(AllMoviesContext);
    const {allTVShows} = useContext(AllTVShowsContext);
    const {location} = useContext(LocationContext);

    const redirect = useHistory();


    if(location.location === "movies")
    {
        dataArray = allMovies;
        title = 'Movies'
    }

    else if(location.location === "tvShows") // Returning as Undefine *fix* might have to use state
    {
        dataArray = allTVShows;
        title = 'TV Shows'

    }
    else // Returning as Undefine *fix* might have to use state
    {
        dataArray = null
        title = "Try Again"
        redirect.push("/")

    }

    return (

        <div className="listingPage">
            
            <Header/>

            <h3 className="sectionHeading"> 
                All {title}
            </h3>

            <ListingContainer info={dataArray}/>

            <Footer/>         

        </div>
    )
}

export default ListingPage
