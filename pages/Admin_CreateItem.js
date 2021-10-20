import React from 'react';
// import { useHistory } from 'react-router-dom'; // Read up More
import { useState } from 'react';

// import { Link } from "react-router-dom";

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing BS Components */
import Form from 'react-bootstrap/Form'
import { Col, Row, Button} from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap';


const AdminCreatePage = () => {

    const [form, setForm] = useState({

        title: "",          // String
        type: "",           // String
        synopsis:"",       // String
        trailer: "",        // String
        releaseDate: "",    //YYYY,MMM,DD
        genre: [
            "Action",
            "Animation",
            "Comedy",
            "Crime",
            "Drama",
            "Documentry",
            "Fantasy",
            "Historical",
            "Horror",
            "Romance",
            "Sci Fi",
            "Thriller", 
            "Western",
            "Other"
        ],          // [] Array
        rating: [
            "G",
            "PG",
            "PG-13",
            "R",
            "NC-17"
        ],         // String - MPA: G, PG, PG-13, R, NC-17
        userScore:"",       // Num 1 - 10
        smallPosterImg: "", // String
        largePosterImg: "", // String
        priceToRent: "",    // Num 
        priceToBuy: "",     // Num 
        isFeatured: "",     // Boolean
        isNewRelease: "",   // Boolean

        numOfSeasons: "",   // Num    - Movie Specific
        runtime: ""         // Num    - Tv SHows Specific
        
    })

    return (       

        <div className="adminCreatePage">

            <Header/>

            <main>

                <h3 className="sectionHeading"> 
                    Welcome Admin  {/* Admin Name */}
                    Create A New Movie / TV Show
                </h3>

                <Form method="GET" onSubmit={""}>
                {/* <Form method="GET"> */}

                
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control value={form.title} onChange={e => setForm({...form, title: e.target.value})} type="text" placeholder="Title" />
                        </Col>

                        <Col sm={3}>
                            <Form.Select aria-label="Floating label select example">
                                <option value="" label="Select Type"> </option>
                                <option value="movies" onSelect={e => setForm({...form, type: e.target.value})}> Movie </option>
                                <option value="tvShows" onSelect={e => setForm({...form, type: e.target.value})}> Tv Show </option>
                            </Form.Select>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Synopsis
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control style={{ height: '150px' }} value={form.synopsis} onChange={e => setForm({...form, synopsis: e.target.value})} as="textarea" placeholder="Synopsis" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Trailer
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={form.trailer} onChange={e => setForm({...form, trailer: e.target.value})} type="text" placeholder="YouTube Link" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Genre
                        </Form.Label>
                        <Col className="checkboxContainer">
                            {form.genre.map((type) => (
                                <div key={`default-${type}`} className="mb-5">
                                    <Form.Check 
                                        type='checkbox'
                                        id={`${type}`}
                                        label={`${type}`}
                                        value={`${type}`}
                                    />
                                </div>
                            ))}
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >

                        <Form.Label column sm={2}>
                            Release Date:
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control value={form.releaseDate} onChange={e => setForm({...form, releaseDate: e.target.value})} type="text" placeholder="YYYY, MM, DD" />
                        </Col>
                   
                        <Form.Label column sm={2}>
                            MPA Rating:
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Select aria-label="Floating label select example">                         
                                <option value={""}> Select Rating: </option>
                                    {form.rating.map((rate) => ( 
                                        <option value={rate} onSelect={e => setForm({...form, rating: e.target.value})}> {rate} </option>
                                    ))}
                            </Form.Select>
                        </Col>
                                          
                        <Form.Label column sm={2}>
                            User Score:
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control value={form.userScore} onChange={e => setForm({...form, userScore: e.target.value})} type="text" placeholder="1 - 10" />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Small Poster
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control

                            type="file"
                            required
                            name="file"
                            onChange={e => setForm({...form, smallPosterImg: e.target.name})}
                            // isInvalid={!!errors.file}
                            />
                        </Col>
                     
                        <Form.Control.Feedback type="invalid" tooltip>
                        {/* {errors.file} */}
                        </Form.Control.Feedback>
                     
                        <Form.Label column sm={2}>
                            Large Poster
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control

                            type="file"
                            required
                            name="file"
                            onChange={e => setForm({...form, largePosterImg: e.target.name})}
                                                        // isInvalid={!!errors.file}
                            />
                        </Col>
                     
                        <Form.Control.Feedback type="invalid" tooltip>
                        {/* {errors.file} */}
                        </Form.Control.Feedback>
                   
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Rental Price
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control value={form.priceToRent} onChange={e => setForm({...form, priceToRent: e.target.value})} type="text" placeholder="Rental Price" />
                        </Col>

                        <Form.Label column sm={2}>
                            Purchase Price
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control value={form.priceToBuy} onChange={e => setForm({...form, priceToBuy: e.target.value})} type="text" placeholder="Purchase Price" />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >

                        <Form.Label column sm={1}>
                            Featured ?
                        </Form.Label>
                        <Col sm={1}>
                            <Form.Control value={form.isFeatured} onChange={e => setForm({...form, isFeatured: e.target.value})} type="text" placeholder="Feature" />
                        </Col>

                        <Form.Label column sm={2}>
                            New Release ? 
                        </Form.Label>
                        <Col sm={1}>
                            <Form.Control value={form.isNewRelease} onChange={e => setForm({...form, isNewRelease: e.target.value})} type="text" placeholder="New Release" />
                        </Col>

                        <Form.Label column sm={2}>
                            {form.type === "movies" ? "Run Time" : "No of Seasons"}
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={form.type === "movies" ? `${form.runtime}` : `${form.numOfSeasons}` } 
                            onChange={e => 
                                
                                setForm({
                                    ...form, 
                                    numOfSeasons: e.target.value
                                })} 

                                type="text" placeholder={form.type === "movies" ? "Run Time" : "No of Seasons"} />
                        </Col>
                    </Form.Group>

                    
                    {/* <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Run Time of Movie
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={form.runtime} onChange={e => setForm({...form, runtime: e.target.value})} type="text" placeholder="Run Time of Movie" />
                        </Col>
                    </Form.Group> */}

                    <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit"> Create / Add </Button>
                    </Col>
                    </Form.Group>

                </Form>

            </main>

            <Footer/>         

        </div>
    )
}

export default AdminCreatePage;
