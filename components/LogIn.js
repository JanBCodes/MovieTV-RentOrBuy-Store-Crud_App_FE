import React, { useContext } from 'react';

import UserContext from '../context/LogInContext.js';

import { useHistory } from 'react-router-dom'; // Read up More

import Form from 'react-bootstrap/Form'
import { Col, Row, Button} from 'react-bootstrap'


const LogIn = () => {

    // const [message, setMessage] = useState({message: null})

    const {user, setUser} = useContext(UserContext);
    const redirect = useHistory()

    const verifyUserCredentials = (evt) => {

        evt.preventDefault(); //Prevents Default Behaviour of the evt (in this case submit)

        console.log(user)

        fetch("http://localhost:3500/user/login", {
        
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({

                email: user.email,
                password: user.password
       
            })
        })

        .then(res => res.json())
        .then(data => {

            console.log(data)

            if(data.admin === true) // Admin Logged In && Direct to Admin Dashboard
            {
                redirect.push("/admin/dashBoard/")
            }
            else if(data.admin === false) // Customer Logged In && Direct to User Dashboard/Profile
            {
                redirect.push("/user/dashBoard")
            }
            else
            {
                // setMessage({message: "Login Unsuccessful"})

                redirect.push("/login")
            }
      
        })
        .catch ((err)=>{

            console.log(err)
        })
    }

    return (
        <div className="logInContainer">
            <h1> Log in to View </h1>

            <Form method="GET" onSubmit={verifyUserCredentials}>

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

        </div>
    )
}

export default LogIn
