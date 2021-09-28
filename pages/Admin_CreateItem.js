import React from 'react';
// import { useHistory } from 'react-router-dom'; // Read up More
import { useContext } from 'react';


// import { Link } from "react-router-dom";

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

import CreateContext from '../context/LogInContext.js';

/* Importing BS Components */
import Form from 'react-bootstrap/Form'
import { Col, Row, Button} from 'react-bootstrap'


const AdminCreatePage = () => {


    const {user, setUser} = useContext(CreateContext);
    // const redirect = useHistory()





    return (       
        <div className="adminCreatePage">

            <Header/>

            <main>

                <h3 className="sectionHeading"> 
                    Welcome Admin{/* Admin Name */}
                    Create A New Item
                </h3>

                {/* <Form method="GET" onSubmit={""}> */}
                <Form method="GET">


                {/* <div>{message}</div> */}

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control value={user.email} onChange={e => setUser({...user, email: e.target.value})} type="email" placeholder="Email" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control value={user.password}  onChange={e => setUser({...user, password: e.target.value})} type="text" placeholder="Password" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit"> Log In </Button>
                </Col>
                </Form.Group>

                </Form>



            </main>

            <Footer/>         

        </div>
    )
}

export default AdminCreatePage;
