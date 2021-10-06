import React from 'react';
import {Link} from "react-router-dom";

/* Importing BS Components */
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';




const ListingCard = (props) => {

    let dataArray;
    dataArray = props.info;

    const displayListing = (evt) => {
        console.log(evt.target) //undefined
    }
    
/*     const backEndHost = `http://127.0.0.1:3500`

    fetch(`${backEndHost}/items`)

            const imageLocation = `${backEndHost}/assets/img/itemUploads` */

    return (

    <div className="slideCard" >

            {dataArray.map((data) => ( 

                <Link to={`/${data.type}/${data._id}`} key={data._id} >

                    <Card className="cards" id={data._id} key={data._id} onClick={displayListing}>

                        <Card.Body id="oneCard" style={{backgroundImage: `url({data.largePosterImg})`}} >
                        </Card.Body>
                        
                        <Card.Body className="cardTitle">
                            <Card.Title> 
                                {data.title}
                            </Card.Title>
                        </Card.Body>
                        
                    
                        <Card.Body >
                            <Card.Text>
                                {data.synopsis.substring(0,100)}...
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Rent: ${data.priceToRent}</ListGroupItem>
                            <ListGroupItem>Buy: ${data.priceToBuy}</ListGroupItem>
                        </ListGroup>

                    </Card>


                </Link>


            ))}
    
        </div>  
    )
}

export default ListingCard;
