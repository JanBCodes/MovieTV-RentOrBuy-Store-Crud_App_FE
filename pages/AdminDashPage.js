import React from 'react';
// import { useState } from 'react';


import { Link } from "react-router-dom";

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing BS Components */
import Card from 'react-bootstrap/Card';
// import ModalFn from '../components/Modal.js';


const AdminDashPage = () => {

    return (       
        <div className="adminDashBoard">

            <Header/>

            <main>

                <h3 className="sectionHeading"> 
                    Welcome Admin{/* Admin Name */}
                </h3>

                <Card id="dashBoardCards">
                
                    <Link to="/admin/View">
                        <Card.Body>
                            View All Movies or TV Shows
                        </Card.Body>
                    </Link>

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

            </main>

            <Footer/>         

        </div>
    )
}

export default AdminDashPage
