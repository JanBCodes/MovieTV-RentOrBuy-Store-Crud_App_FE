/* import React from 'react'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalFn = () => {
      
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


    
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
// }

export default ModalFn;

 */

// <div id="movieTrailerDiv">
// <div id="movieTrailerVideo">
// <div id="modalContainer">
//     <div>
//         <button> X </button>
//         <iframe 
//         src="https://www.youtube.com/embed/${selectedMovieTrailer}" 
//         frameborder="0" allow="accelerometer; autoplay; 
//         encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen>
//         </iframe>

//     </div>
// </div>
//     <iframe width="500" height="300"
//         src="https://www.youtube.com/embed/${selectedMovieTrailer}" 
//         frameborder="0" allow="accelerometer; autoplay; 
//         encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen>
//     </iframe>
//     <div id="movieTrailerInfo">
//         <h2 id="h2"> ${movieSelectedObject.title} </h2>
//         <h3 id="voteAvg"> Vote Average: ${movieSelectedObject.vote_average} </h3>
//         <p> ${movieSelectedObject.overview} </p>
//         <p> Release Date: <br> ${movieSelectedObject.release_date} </p>
//     </div>
// </div>
// <div id="movieTrailer">
//     <img src="https://image.tmdb.org/t/p/original/${movieSelectedObject.poster_path}" width="${width}px">         
// </div>
// </div>`