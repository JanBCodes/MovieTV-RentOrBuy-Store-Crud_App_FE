import React from 'react';

/* Importing BS Components */
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ListingCard = (props) => {

    let dataArray;
    dataArray = props.info

    return (
        <>
        {dataArray.map((data) => ( //

            <Card className="cards" key={data._id}>
                <Card.Img variant="top" src={data.smallPosterImg} />

                <Card.Body>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" thumbnail />
                    </Col>

                    <Card.Title> 
                        {data.title}
                    </Card.Title>
                    <Card.Text>
                        {data.synopsis.substring(0,100)}...
                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Rent: ${data.priceToRent}</ListGroupItem>
                    <ListGroupItem>Buy: ${data.priceToBuy}</ListGroupItem>
                    {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                </ListGroup>

                {/* <Card.Body>
                    <Card.Link href="#"> BUY</Card.Link>
                    <Card.Link href="#">RENT </Card.Link>
                </Card.Body> */}

            </Card>
        ))} 

        </>
    )
}

export default ListingCard;
