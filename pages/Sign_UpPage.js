import React from 'react';

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Register from "../components/Registration.js"

const Sign_UpPage = () => {
    return (
        <div className="signUpPage">
            
            <Header/>

            <main>
                <Register/>
            </main>

            <Footer/>     

        </div>
    )
}

export default Sign_UpPage;
