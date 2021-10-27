import React from 'react';
import { useContext } from 'react';
import {Link} from "react-router-dom";

/* Importing BS Components */
import Card from 'react-bootstrap/Card';

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing Context */
import searchContext from '../context/SearchContext';

const SearchResultsPage = () => {

    const {searchResults} = useContext(searchContext);

    if(searchResults.total > 0 || searchResults === undefined)
    {
        return (<>
    
            <Header/>

            <Card.Title className="searchResultsTitle"> 
                Results for {`${searchResults.data[0].type}` === 'tvShows' ? "TV Shows" :  "Movies"}
            </Card.Title>

            <div className="searchResults" >

                {searchResults.data.map((data) => ( 
                    
                    <Link to={`/${data.type}/${data._id}`} key={data._id} >

                        <Card className="cards" id={data._id} key={data._id}>

                            <Card.Body id="oneCard" style={{backgroundImage: `url(${data.largePosterImg})`}} >
                            
                            <Card.Body className="cardTitle">
                                <Card.Title> 
                                    {data.title}
                                </Card.Title>
                            </Card.Body>
                                                
                            <Card.Body >
                                <Card.Text>
                                    {data.synopsis.substring(0,150)}...
                                </Card.Text>
                            </Card.Body>

                            </Card.Body>

                        </Card>

                    </Link>

                ))}

            </div>

            <Footer/>   
            
        </>)
    }

    else
    {
        return (<>

            <Header/>

            <Card.Title className="searchResultsTitle"> 
                    Sorry.... No Results Found
            </Card.Title>

            <Footer/>

        </>)
    }

};

export default SearchResultsPage;
