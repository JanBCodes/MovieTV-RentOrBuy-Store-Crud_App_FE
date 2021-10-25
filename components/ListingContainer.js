import React from 'react'

//  import {useContext} from 'react';


// import ListingCard from '../components/ListingCard.js';

/* Importing BS Components */
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

import {Link} from "react-router-dom";

// import SelectedContext from '../context/SelectedContext.js';


const ListingContainer = (props) => {

    let dataArray = props.info

    //  const {setSelected} = useContext(SelectedContext);




    
    return (

        <div className="listingContainer">

            <div className="slideCard" >

            {dataArray.map((data) => ( 

                <Link to={`/${data.type}/${data._id}`} key={data._id} id={data._id}>

                    <Card className="cards" id={data._id} >

                    {/* style={{ backgroundImage: `url("http://127.0.0.1:3500/assets/img/movieBannerBiG/${data.largePosterImg}")` }} */}

                        {/* <Image src={`http://127.0.0.1:3500/assets/img/movieBannerBiG/${data.largePosterImg}`} thumbnail /> */}
                        <Image src={`${data.smallPosterImg}`} thumbnail />


                        
                        <Card.Body className="cardTitle">
                            <Card.Title> 
                                {data.title}
                            </Card.Title>
                        </Card.Body>
                                            
                        <Card.Body >
                            <Card.Text>
                                {data.synopsis.substring(0,200)}...
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Rent: ${data.priceToRent}</ListGroupItem>
                            <ListGroupItem>Buy: ${data.priceToBuy}</ListGroupItem>
                        </ListGroup>

                        <Image src={`${data.largePosterImg}`} thumbnail />


                    </Card>


                </Link>


            ))}

            </div>  


        </div>
    )
}

export default ListingContainer;
