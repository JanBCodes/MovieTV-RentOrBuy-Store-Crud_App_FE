import React from 'react'

import { FaSearchengin } from 'react-icons/fa';

const SearchBar = () => {






    return (
        <div className="searchBarContainer">
            <form action="/movies">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"> <FaSearchengin/> </button>
            </form>
        </div>
    )
}

export default SearchBar
