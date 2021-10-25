import React, { useEffect, useState } from 'react';


/* Importing BS Components */
import Carousel from 'react-bootstrap/Carousel';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';

const Hero = () => {

    const [allNewReleases, setAllNewReleases] = useState([]); 

    useEffect(()=>{

        const fetchData = new RESTAPI();

        fetchData.getAPIData(`http://localhost:3500/movies?isNewMovie=y`, "GET")
        .then((data) => {

            setAllNewReleases(data.data)
        })

    },[]);

    return (
        <div className="heroContainer">
            <Carousel>
                {allNewReleases.map((data) => ( 

                    <Carousel.Item key={data._id}>

                        <img
                            // className="d-block w-100"
                            src={`${data.largePosterImg}`} 
                            alt={`${data.title}`}
                        />
                        <Carousel.Caption>
                            <h3> {data.title}</h3>
                            <p>Stars: {data.rating}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
                
            </Carousel>
        </div>
    )
}

export default Hero;
