import { useContext} from 'react'

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing BS Components */
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';


import SelectedContext from '../context/SelectedContext.js';

const DetailsPage = () => {

    const {selected} = useContext(SelectedContext);
   
    console.log(selected)

    return (


        <div className="detailsPage">

            <Header/>

            <h3 className="sectionHeading"> 
                {selected.title}
            </h3>
        
        
            <div className="detailsPageContainer">

                    <Image src={`http://127.0.0.1:3500/assets/img/movieBannerBiG/${selected.largePosterImg}`} thumbnail />

                    <div>

                        <Card.Body className="cardTitle">
                            <Card.Title> 
                                {selected.title}
                            </Card.Title>
                        </Card.Body>
                                            
                        <Card.Body >
                            <Card.Text>
                            {selected.synopsis}
                            </Card.Text>
                        </Card.Body>

                        <ListGroupItem>Rent: 
                        $ {selected.priceToRent}
                        </ListGroupItem>
                        <ListGroupItem>Buy: 
                        $ {selected.priceToBuy}
                        </ListGroupItem>
                                    
                    </div>

                </div>

            <Footer/>         

        </div>

    )
}

export default DetailsPage;
