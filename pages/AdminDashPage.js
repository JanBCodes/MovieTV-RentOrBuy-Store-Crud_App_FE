import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from "react-router-dom";

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing BS Components */
import Card from 'react-bootstrap/Card';
import Button from '@restart/ui/esm/Button';
// import ModalFn from '../components/Modal.js';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';

import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const AdminDashPage = () => {

    const [updatedMovies, setMovies] = useState([]); 
    const [updatedTvShows, setTVShows] = useState([]); 
    // const [deleteItem, setDelete] = useState({}); 


    useEffect(()=>{

        const fetchData = new RESTAPI();

        fetchData.getAPIData(`http://localhost:3500/movies/`, "GET")
        .then((data) => {

            setMovies(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows/`, "GET")
        .then((data) => {

            setTVShows(data.data)
        })

     },[]);

    //  const deleteObject = (e) => {

    //     console.log(e.target)

    //     alert(`delete`)


    //  }


    return (       
        <div className="adminDashBoard">

            <Header/>

            <main>

                <h3 className="sectionHeading"> 
                    Welcome Admin{/* Admin Name */}
                </h3>

                <Card id="dashBoardCards">
                
                    <Link to="/admin/Create">
                        <Card.Body>
                            Add New Movie or TV Show 
                        </Card.Body>
                    </Link>

                    <Link to="/admin/Update">
                        <Card.Body>
                            Edit Movie or TV Show 
                        </Card.Body>
                    </Link>

                    <Link to="/admin/Delete">
                        <Card.Body>
                            Delete A Movie or TV Show
                        </Card.Body>
                    </Link>

                </Card>

                <div className="viewAdminAll"> 

                <Button className="viewAdmin">
                    All Movies
                </Button>
                
                <Button className="viewAdmin">
                    TV Shows
                </Button>
                    <table>
                        <th className="viewAll">
                            <tr>
                                <th>Title</th>
                                <th>Release</th>
                                <th>Rent</th>
                                <th>Buy</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {updatedMovies.map((data) => ( 
                                <tr id={data._id}>
                                    <td>{data.title}</td>
                                    <td>{data.releaseDate}</td>
                                    <td>{data.priceToRent}</td>
                                    <td>{data.priceToBuy}</td>
                                    <td>
                                        <Link to ={`/admin/${data.type}/${data._id}`}>
                                            <FaRegEdit/>
                                        </Link>
                                    </td>
                                    <td>
                                        <AiFillDelete id={`${data._id}`}  
                                        // onClick={e => setDelete(data)}
                                        />
                                        {/* {console.log(data)} */}
                                    </td>
                                </tr>
                            ))}
                        </th>
                    </table>

                    <table>
                    <th className="viewAll">
                       <tr>
                            <th>Title</th>
                            <th>Release</th>
                            <th>Rent</th>
                            <th>Buy</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {updatedTvShows.map((data) => ( 
                            <tr id={data._id}>
                                <td>{data.title}</td>
                                <td>{data.releaseDate}</td>
                                <td>{data.priceToRent}</td>
                                <td>{data.priceToBuy}</td>
                                {/* <td> Click to Edit */}
                                    <Link to={`/${data.type}/${data._id}`}> <FaRegEdit/> </Link>

                                {/* </td> */}
                                <td>1231</td>
                            </tr>

                        ))}
                    </th>
                    </table>

                </div>

            </main>

            <Footer/>         

        </div>
    )
}

export default AdminDashPage
