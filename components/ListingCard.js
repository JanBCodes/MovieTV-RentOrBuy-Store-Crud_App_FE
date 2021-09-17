import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


const listingCard = ({props}) => {

    // console.log(props)
    
    return (
        
        <Card className="cards">
            <Card.Img variant="top" src="" />
            
            <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                    <Image src="holder.js/171x180" thumbnail />

                </Col>

                <Card.Title></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>

            {/* <Card.Body>
                <Card.Link href="#"> BUY</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
        </Card>
    )
}

export default listingCard;
