import React from 'react';
import {useContext} from 'react';
import {Link} from "react-router-dom";

/* Importing BS Components */
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

import SelectedContext from '../context/SelectedContext.js';


const ListingCard = (props) => {

    let dataArray;
    // let imageLocation;

    dataArray = props.info;

    const {setSelected} = useContext(SelectedContext);


    // useEffect(() => {
    //     const backEndHost = `http://127.0.0.1:3500`

    //     fetch(`${backEndHost}/assets`)
    //     .then(res => res.json())
    //     .then(data => {
    
    //         console.log(data)
    
    //         // data.results.forEach(element => {
    
    //         // imageLocation = `${backEndHost}/assets/img/movieBannerBiG/`
    
    
    //         // })    
    //     })

    // }, [])



    return (

    <div className="slideCard" >

            {dataArray.map((data) => ( 

                <Link to={`/${data.type}/${data._id}`} key={data._id} id={data._id} 
                                                                        onClick={e => setSelected(data)}>

                    <Card className="cards" id={data._id} >

                    {/* style={{ backgroundImage: `url("http://127.0.0.1:3500/assets/img/movieBannerBiG/${data.largePosterImg}")` }} */}

                        <Image src={`http://127.0.0.1:3500/assets/img/movieBannerBiG/${data.largePosterImg}`} thumbnail />
                        
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

                    </Card>


                </Link>


            ))}
    
        </div>  
    )
}

export default ListingCard;
