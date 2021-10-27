import React from 'react'

//  import {useContext} from 'react';
// import ListingCard from '../components/ListingCard.js';

/* Importing BS Components */
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import {Link} from "react-router-dom";

// import SelectedContext from '../context/SelectedContext.js';


const ListingContainer = (props) => {

    let dataArray = props.info
    
    return (

        <div className="listingContainer">
            {/* <Splide>  */}

            <div className="slideCard" >

            {dataArray.map((data) => ( 
            // <SplideSlide  key={data._id} >
                <Link to={`/${data.type}/${data._id}`}id={data._id} key={data._id} >

                    <Card className="cards" id={data._id} >

                        <Image src={`${data.smallPosterImg}`} thumbnail />
                        
                        <Card.Body className="cardTitle">
                            <Card.Title> 
                                {data.title}
                            </Card.Title>
                                            
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Rent: ${data.priceToRent}</ListGroupItem>
                                <ListGroupItem>Buy: ${data.priceToBuy}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                </Link>
                // </SplideSlide>
            ))}

            </div>  
            {/* </Splide> */}



        </div>
    )
}

export default ListingContainer;
