import React from 'react';
import { useContext } from 'react';
// import { useHistory } from 'react-router-dom'; // Read up More
import {useLocation} from "react-router-dom";



/* Importing Components */
import Header from "../components/Header.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

/* Importing Context */
import AllMoviesContext from '../context/AllMoviesContext.js';
import AllTVShowsContext from '../context/AllTVShowsContext.js';

const ListingPage = () => {

    let dataArray;
    let title;

    const {allMovies} = useContext(AllMoviesContext);
    const {allTVShows} = useContext(AllTVShowsContext);

      const rootLocation = useLocation();
//      console.log(rootLocation.pathname);

    if(rootLocation.pathname === "/movies")
    {
        dataArray = allMovies;
        title = 'Movies'
    }

    if(rootLocation.pathname === "/tvShows")
    {
        dataArray = allTVShows;
        title = 'TV Shows'
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
