import React from 'react';

import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Read up More


const SearchBar = () => {

    let input;
    const [searchInput, setSearchInput] = useState();
    const redirect = useHistory();

    const whichDBtoSearch = (e) => {

        console.log(e.target.value)

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

        fetch(`http://localhost:3500/${input}/search`, {
            
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({search: searchInput})
        })
        .then(res => res.json())
        .then(data => {

            console.log(data)
            redirect.push("/searchResults")

        })
        .catch ((err)=>{

            console.log(err)
            
        })

    }

    return (

        <div className="searchBarContainer">
            <form className="searchForm" method="POST"  onSubmit={searchDB}>
                <input type="text" placeholder="Search All Movies and TV Shows." name="search" 
                onChange={e => setSearchInput(e.target.value) }/>

                <button className="searchMovies" value="movies" onClick={whichDBtoSearch} action="/movies/search"> M </button>
                <button className="searchTvShows" value="tvShows" onClick={whichDBtoSearch}  action="/tvShows/search"> TV </button>
            </form>
        </div>
    )
}

export default SearchBar;
