import React from 'react'

import { FaSearchengin } from 'react-icons/fa';

const SearchBar = () => {






    return (
        <div className="searchBarContainer">
            <form className="searchForm" action="/movies/search" method="POST">
                <input type="text" placeholder="Search.." name="search"/>
                <button className="searchActionButton" type="submit"> <FaSearchengin/> </button>
            </form>
        </div>
    )
}

export default SearchBar
