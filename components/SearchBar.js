import React from 'react'

const SearchBar = () => {






    return (

        <div className="searchBarContainer">
            <form className="searchForm" action="/movies/search" method="POST">
                <input type="text" placeholder="Search All Movies and TV Shows." name="search"/>
                <button className="searchMovies" type="submit"> M </button>
                <button className="searchTvShows" type="submit"> TV </button>

            </form>
        </div>
    )
}

export default SearchBar
