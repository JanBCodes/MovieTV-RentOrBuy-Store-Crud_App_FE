import React, { useContext } from 'react';

import UserContext from '../context/LogInContext.js';
import { useHistory } from 'react-router-dom'; // Read up More

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Registration = () => {

    const {user, setUser} = useContext(UserContext);
    const redirect = useHistory();

    const addNewUser = (evt) => {

        evt.preventDefault(); //Prevents Default Behaviour of the evt (in this case submit)


        fetch("http://localhost:3500/user", {
        
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({

                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password

            })
                   
        })

        .then(res => res.json())
        .then(data => {

            console.log(data.data.admin)

            const isAdmin = data.data.admin


            if(isAdmin) // Admin Logged In && Direct to Admin Dashboard
            {
                redirect.push("/admin/dashBoard/")
                alert('Registration Successful for Admin')
            }
            else if(!isAdmin) // Customer Logged In && Direct to User Dashboard/Profile
            {
                redirect.push("/user/dashBoard")
                alert('Registration Successful for User')

            }
            else
            {
                alert('Registration Unsuccessful')
                redirect.push("/login")
            }
      
        })
        .catch ((err)=>{

            console.log(err)

        })
    }


    return (
        
        <div className="registration">

            <h1 className="sectionHeading"> User Registration </h1>

            <Form method="GET" onSubmit={addNewUser}>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={4}>
                        <Form.Control value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})} placeholder="First Name" />
                    </Col>

                    <Form.Label column sm={2}>
                        Last Name
                    </Form.Label>
                    <Col sm={4}>
                        <Form.Control value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})} placeholder="Last Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={4}>
                        <Form.Control value={user.email} onChange={e => setUser({...user, email: e.target.value})} type="email" placeholder="Email" />
                    </Col>

                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={4}>
                        <Form.Control value={user.password} onChange={e => setUser({...user, password: e.target.value})} type="text" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 registerButton">
                    <Col sm={12}>
                        <Button type="submit"> Register </Button>
                    </Col>
                </Form.Group>

            </Form>

        </div>
    )
}

export default Registration
