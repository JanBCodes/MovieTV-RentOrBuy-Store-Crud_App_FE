import React from 'react';
import { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";


/* Importing CSS */
import "../assets/css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing Pages */
import HomePage from '../pages/HomePage';
import ListingPage from '../pages/ListingPage';
import AdminPage from '../pages/AdminDashPage';
import LogInPage from '../pages/Log_InPage';
import SignUpPage from '../pages/Sign_UpPage';

/* Importing Context */
import AllMoviesContext from '../context/AllMoviesContext.js';
import FTMoviesContext from '../context/FTMoviesContext.js';
import TVshowsContext from '../context/FTTVShowsContext.js';
import AllNewReleases from '../context/AllNewReleasesContext.js';
import AllTVShowsContext from '../context/AllTVShowsContext.js';

const App = () => {

    const [allMovies, setAllMovies] = useState([]); 
    const [allFTMovies, setAllFTMovies] = useState([]); 
    const [allFTTVshows, setAllFTTVshows] = useState([]); 
    const [allNewReleases, setAllNewReleases] = useState([]); 
    const [allTVShows, setAllTVShows] = useState([]); 


    useEffect(()=>{

        fetch("http://localhost:3500/movies/")
        
        .then(res => res.json())
        .then(data => {

            setAllMovies(data.data)
        })

        fetch("http://localhost:3500/tvShows")
        
        .then(res => res.json())
        .then(data => {

            setAllTVShows(data.data)
        })


        fetch("http://localhost:3500/movies?featMovie=true")
        
        .then(res => res.json())
        .then(data => {

            setAllFTMovies(data.data)

        })

        fetch("http://localhost:3500/tvShows?featTV=true")
        
        .then(res => res.json())
        .then(data => {
          
            setAllFTTVshows(data.data)
        })

        fetch("http://localhost:3500/movies?isNewMovie=y")
        
        .then(res => res.json())
        .then(data => {
          
            setAllNewReleases(data.data)

        })
    
      },[]);

    return (

    <div className="container">
            
    <Router>
        <Switch>

            <AllMoviesContext.Provider value = {{allMovies, setAllMovies}}>
            <FTMoviesContext.Provider value = {{allFTMovies, setAllFTMovies}}> 
            <TVshowsContext.Provider value = {{allFTTVshows, setAllFTTVshows}}> 
            <AllNewReleases.Provider value = {{allNewReleases, setAllNewReleases}}>
            <AllTVShowsContext.Provider value = {{allTVShows, setAllTVShows}}>



                <Route exact path = "/">
                    <HomePage/>
                </Route>

                <Route exact path = "/movies">
                    <ListingPage/>
                </Route>

                <Route exact path = "/tvShows">
                    <ListingPage/>
                </Route>

                <Route exact path = "/admin">
                    <AdminPage/>
                </Route>

                <Route exact path = "/logIn">
                    <LogInPage/>
                </Route>

                <Route exact path = "/signUp">
                    <SignUpPage/>
                </Route>



            </AllTVShowsContext.Provider>
            </AllNewReleases.Provider>
            </TVshowsContext.Provider>
            </FTMoviesContext.Provider>
            </AllMoviesContext.Provider>

        </Switch>
    </Router>

    </div>
  )
}

export default App;
