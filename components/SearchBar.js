import React,  { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Read up More

/* Importing Context */
import searchContext from '../context/searchContext';
import BackEndHostContext from '../context/BackendHostContext';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';


const SearchBar = () => {

    let input;
    const [searchInput, setSearchInput] = useState();
    const {searchResults, setSearchResults} = useContext(searchContext)
    const {backEndHost} = useContext(BackEndHostContext)

    const redirect = useHistory();

    const whichDBtoSearch = (e) => {

        if(e.target.value === "movies")
        {
            input = "movies"
        }
        else
        {
            input = "tvShows"
        }

    }

    const searchDB = (evt) => {

        evt.preventDefault(); //Prevents Default Behaviour of the evt (in this case submit)

        const fetchData = new RESTAPI();
        fetchData.getAPIData(`${backEndHost.backEndHost}/${input}/search`, "POST", {search: searchInput})// getAPIData(endPoint, Type, objToStringify)
        .then(data => {

            setSearchResults(data)
            console.log(searchResults)
            redirect.push("/searchResults")

        })
        .catch ((err)=>{

            console.log(err)
            
        })

    }

    return (

        <div className="searchBarContainer">
            <form className="searchForm" method="POST"  onSubmit={searchDB}>
                <input type="text" placeholder="Search All Movies or All TV Shows." name="search" 
                onChange={e => setSearchInput(e.target.value) }/>

                <button className="searchMovies" value="movies" onClick={whichDBtoSearch} action="/movies/search"> M </button>
                <button className="searchTvShows" value="tvShows" onClick={whichDBtoSearch}  action="/tvShows/search"> TV </button>
            </form>
        </div>
    )
}

export default SearchBar;
