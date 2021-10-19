import React from 'react';
import { useContext } from 'react';

/* Importing BS Components */
import Carousel from 'react-bootstrap/Carousel';


/* Importing Context */
import NewReleases from '../context/AllNewReleasesContext.js'

const Hero = () => {

    const {allNewReleases} = useContext(NewReleases);


    return (
        <div className="heroContainer">
            <Carousel>
                {allNewReleases.map((data) => ( 

                    <Carousel.Item key={data._id}>

                        <img
                            // className="d-block w-100"
                            src={`http://127.0.0.1:3500/assets/img/movieBannerBiG/${data.largePosterImg}`} 
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
