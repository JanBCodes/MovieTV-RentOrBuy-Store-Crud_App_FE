import React from 'react';

/* Importing Components */
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import LogIn from '../components/LogIn.js';

const Log_InPage = () => {


    return (

        
        <div className="LogInPage">
            
            <Header/>

            <main style={{minHeight: "80vh"}}>
                <LogIn/>
            </main>

            <Footer/>     

        </div>
    )
}

export default Log_InPage
