import React from 'react';
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // Read up More
import {useLocation} from "react-router-dom";
import { useState } from 'react';

/* Importing Components */
import Header from "../components/Header.js"
import ListingContainer from "../components/ListingContainer.js"
import Footer from "../components/Footer.js"

// /* Importing Context */
// import AllMoviesContext from '../context/AllMoviesContext.js';
// import AllTVShowsContext from '../context/AllTVShowsContext.js';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';


const ListingPage = () => {

    let dataArray;
    let title;

    // const {allMovies, setAllMovies} = useContext(AllMoviesContext);
    // const {allTVShows, setAllTVShows} = useContext(AllTVShowsContext);

    const [allMovies, setAllMovies] = useState([]); 
    const [allTVShows, setAllTVShows] = useState([]); 

    const rootLocation = useLocation();

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

    useEffect(()=>{

    const fetchData = new RESTAPI();

        fetchData.getAPIData(`http://localhost:3500/movies/`, "GET")
        .then((data) => {

            setAllMovies(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows/`, "GET")
        .then((data) => {

            setAllTVShows(data.data)
        })

    },[]);

   
    return (

        <div className="listingPage">
            
            <Header/>

            <main>
                <h3 className="sectionHeading"> 
                    All {title}
                </h3>

                <ListingContainer info={dataArray}/>
                
            </main>
            <Footer/>         

        </div>
    )
}

export default ListingPage
