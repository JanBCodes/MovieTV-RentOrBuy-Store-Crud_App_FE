import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Read up More

/* Importing Context */
import UserContext from '../context/LogInContext.js';


/* Importing BS Components */
import Form from 'react-bootstrap/Form'
import { Col, Row, Button} from 'react-bootstrap'

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';



const LogIn = () => {

    const {user, setUser} = useContext(UserContext);

    const redirect = useHistory();

    const verifyUserCredentials = (evt) => {

        evt.preventDefault(); //Prevents Default Behaviour of the evt (in this case submit)

        const fetchData = new RESTAPI();
        fetchData.getAPIData(`http://localhost:3500/user/login`, "POST", {

            email: user.email,
            password: user.password
   
        })// getAPIData(endPoint, Type, toStringify)
        .then(data => {

            const isAdmin = data.admin


            if(isAdmin) // Admin Logged In && Direct to Admin Dashboard
            {
                redirect.push("/admin/dashBoard/")
            }
            else if(!isAdmin) // Customer Logged In && Direct to User Dashboard/Profile
            {
                redirect.push("/user/dashBoard")

            }
            else
            {
                alert('Log In Unsuccessful')
                redirect.push("/login")
            }

            setUser({

                firstName: "",
                lastName: "",
                email: "",
                password: ""

            })

            console.log("User Fields Reset")
      
        })
        .catch ((err)=>{

            console.log(err)
        })
    }

    return (
        <div className="logInContainer">
            <h1> Log in to View </h1>

            <Form onSubmit={verifyUserCredentials}>

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

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>

                <Button type="submit"> Log In </Button>
                </Col>
            </Form.Group>

            </Form>

        </div>
    )
}

export default LogIn
