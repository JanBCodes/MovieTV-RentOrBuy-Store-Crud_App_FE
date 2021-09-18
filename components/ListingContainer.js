import React from 'react'

import ListingCard from '../components/ListingCard.js';

const ListingContainer = (props) => {

    let dataArray = props.info

    return (

        <div className="listingContainer">
            <ListingCard info={dataArray}/>                           
        </div>
    )
}

export default ListingContainer;
