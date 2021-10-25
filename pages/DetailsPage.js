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

            <main>

                <h2 className="sectionHeading"> 
                    {selected.title}
                </h2>
            
                    <div className="detailsPageContainer">

                        <Image src={`${selected.largePosterImg}`}  thumbnail />

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
                            
                            <Card.Body className="trailer">
                                
                                <div>
                                    <iframe width="660" height="315" src={`${selected.trailer}`} title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Card.Body>
                            
                            <Card.Body >

                            <ListGroupItem>Rent: 
                            $ {selected.priceToRent}
                            </ListGroupItem>
                            
                            <ListGroupItem>Buy: 
                            $ {selected.priceToBuy}
                            </ListGroupItem>
                                        

                            </Card.Body>

                        </div>

                    </div>
                </main>
            <Footer/>         

        </div>

    )
}

export default DetailsPage;
