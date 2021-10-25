import React from 'react';
// import { useHistory } from 'react-router-dom'; // Read up More
import { useState } from 'react';

// import { Link } from "react-router-dom";

/* Importing Components */
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

/* Importing BS Components */
import Form from 'react-bootstrap/Form'
import { Col, Row, Button} from 'react-bootstrap'
// import { FloatingLabel } from 'react-bootstrap';


const AdminCreatePage = () => {


	const genre = [
		"Action",
		"Animation",
		"Comedy",
		"Crime",
		"Drama",
		"Documentry",
		"Fantasy",
		"Historical",
		"Horror",
		"Romance",
		"Sci Fi",
		"Thriller",
		"Western",
		"Other"
	]       // [] Array
	const rating = [
	    "G",
	    "PG",
	    "PG-13",
	    "R",
	    "NC-17"
	]       // String - MPA: G, PG, PG-13, R, NC-17
	const userScore = [ // Num 1 - 10
	    1,2,3,4,5,
	    6,7,8,9,10
	]

	let genresChecked = []


	const [form, setForm] = useState({

		title: "",          // String
		type: "",           // String
		synopsis:"",       // String
		trailer: "",        // String
		releaseDate: "",    //YYYY,MMM,DD
		genre: [],          // [] Array
		rating: "",         // String - MPA: G, PG, PG-13, R, NC-17
		userScore: "", 	// Num 1 - 10 // Num 1 - 10
										// 1,2,3,4,5,
										// 6,7,8,9,10
		smallPosterImg: "", // String
		largePosterImg: "", // String
		priceToRent: "",    // Num
		priceToBuy: "",     // Num
		isFeatured: "",     // Boolean
		isNewRelease: "",   // Boolean

		numOfSeasons: "",   // Num    - Movie Specific
		runtime: ""         // Num    - Tv SHows Specific

	})

	const submitNewMovie = (e) => {

		e.preventDefault();

		const formData = new FormData();


		formData.append('title', form.title);
		formData.append('type', form.type);
		formData.append('synopsis', form.synopsis);
		formData.append('trailer', form.trailer);
		formData.append('releaseDate', form.releaseDate);
		formData.append('genre', form.genre);
		formData.append('rating', form.rating);
		formData.append('userScore', form.userScore);
		formData.append('priceToRent', form.priceToRent);
		formData.append('priceToBuy', form.priceToBuy);
		formData.append('isFeatured', form.isFeatured);
		formData.append('isNewRelease', form.isNewRelease);
		formData.append('numOfSeasons', form.numOfSeasons);
		formData.append('runtime', form.runtime);
		if(!form.smallPosterImg.files[0])
		{
			formData.append('smallPosterImg', form.smallPosterImg.files[0]);
		}
		if(!form.largePosterImg.files[0])
		{
			formData.append('largePosterImg', form.largePosterImg.files[0]);
		}


		if(form.type === 'movies')
		{
			fetch("http://localhost:3500/admin/movies",{
			
				method:"POST",
			 	body: formData
			})
			.then(res => res.json())
			.then(json => {
 
			 console.log(json)
 
		 })
		 .catch(err=>{
 
			 console.log(err)
 
		 })

		}

		if(form.type === 'tvShows')
		{
			fetch("http://localhost:3500/admin/tvShows",{
			
				method:"POST",
			 body: formData
			})
			.then(res => res.json())
			.then(json => {
 
			 console.log(json)
 
		 })
		 .catch(err=>{
 
			 console.log(err)
 
		 })

		}



	} //end of submitNewMovie FN

	return (

		<div className="adminCreatePage">

			<Header/>

			<main>

				<h3 className="sectionHeading">
					Welcome Admin  {/* Admin Name */}
				</h3>
				<h3 className="sectionHeading">
					Create A New Movie / TV Show
				</h3>

				<Form onSubmit={submitNewMovie}>
				{/* <Form method="GET"> */}

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Title: *
						</Form.Label>
						<Col sm={7}>
							<Form.Control value={form.title} onChange={e => setForm({...form, title: e.target.value})} type="text" placeholder="Title" />
						</Col>

					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Type: *
						</Form.Label>

						<Col sm={3}>
						<Form.Select className="me-sm-2" onChange={e => setForm({...form, type: e.target.value})}>
								<option value="" label="Select Type"> </option>
								<option value="movies"> Movie </option>
								<option value="tvShows"> Tv Show </option>
							</Form.Select>
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Synopsis: *
						</Form.Label>
						<Col sm={10}>
							<Form.Control style={{ height: '150px' }} value={form.synopsis} onChange={e => setForm({...form, synopsis: e.target.value})} as="textarea" placeholder="Synopsis" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Trailer: *
						</Form.Label>
						<Col sm={10}>
							<Form.Control value={form.trailer} onChange={e => setForm({...form, trailer: e.target.value})} type="text" placeholder="YouTube Link" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Genre:
						</Form.Label>
						<Col className="checkboxContainer">
							{genre.map((type) => (
								<div key={`genre-${type}`} className="mb-5">
									<Form.Check
										type='checkbox'
										id={type}
										label={type}
										value={type}
										onClick={e => {

											if(e.target.checked) // returns True or False
											{
												genresChecked = [...form.genre]

												genresChecked.push(e.target.value)

												// console.log(genresChecked)

												setForm(
												{
													...form,
													genre: genresChecked 
												})
											}
											else
											{
												genresChecked = [...form.genre]

												const genreToRemove = genresChecked.find((element) => element === e.target.value)

												const index = genresChecked.indexOf(genreToRemove)

												genresChecked.splice(index, 1)

												// console.log(genresChecked)

												setForm(
												{
													...form,
													genre: genresChecked // How to push all checked to
												})
											}
										}}
									/>
								</div>
							))}
						 </Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" >

						<Form.Label column sm={2}>
							Release Date: *
						</Form.Label>
						<Col sm={2}>
							<Form.Control value={form.releaseDate} onChange={e => setForm({...form, releaseDate: e.target.value})} type="text" placeholder="YYYY/MM/DD" />
						</Col>

						<Form.Label column sm={2}>
							MPA Rating:
						</Form.Label>
						<Col sm={2}>
							<Form.Select aria-label="Floating label select example" onChange={e => setForm({...form, rating: e.target.value})}>
								<option value={""}> Select Rating: </option>
									{rating.map((rate) => (
										<option value={rate} key={rate} > {rate} </option>
									))}
							</Form.Select>
						</Col>

						<Form.Label column sm={2}>
							User Score:
						</Form.Label>
						<Col sm={2}>
						<Form.Select aria-label="Floating label select example" onChange={e => setForm({...form, userScore: e.target.value})}>
								<option> Select User Score: </option>
									{userScore.map((score) => (
										<option value={score} key={score} > {score} </option>
									))}
							</Form.Select>
							{/* <Form.Control value={form.userScore} onChange={e => setForm({...form, userScore: e.target.value})} type="text" placeholder="1 - 10" /> */}
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						<Form.Label column sm={2}>
							Small Poster
						</Form.Label>
						<Col sm={4}>
							<Form.Control

							type="file"
							onChange={e => setForm({...form, smallPosterImg: e.target})}
							// isInvalid={!!errors.file}
							/>
						</Col>

						<Form.Control.Feedback type="invalid" tooltip>
						{/* {errors.file} */}
						</Form.Control.Feedback>

						<Form.Label column sm={2}>
							Large Poster
						</Form.Label>
						<Col sm={4}>
							<Form.Control

							type="file"
							onChange={e => setForm({...form, largePosterImg: e.target})}
														// isInvalid={!!errors.file}
							/>
						</Col>

						<Form.Control.Feedback type="invalid" tooltip>
						{/* {errors.file} */}
						</Form.Control.Feedback>

					</Form.Group>

					<Form.Group as={Row} className="mb-3" >
						
						<Form.Label column sm={2}>
							Rental Price: *
						</Form.Label>
						<Col sm={4}>
							<Form.Control value={form.priceToRent} onChange={e => setForm({...form, priceToRent: e.target.value})} type="text" placeholder="Rental Price" />
						</Col>

						<Form.Label column sm={2}>
							Purchase Price:*
						</Form.Label>
						<Col sm={4}>
							<Form.Control value={form.priceToBuy} onChange={e => setForm({...form, priceToBuy: e.target.value})} type="text" placeholder="Purchase Price" />
						</Col>

					</Form.Group>

					<Form.Group as={Row} className="mb-3" >

						<Form.Label column sm={1}>
							Featured:
						</Form.Label>
							<Col sm={2} className="checkboxContainer" 										
							onClick={e => {
								if(e.target.checked) // returns True or False
								{

									setForm(
									{
										...form,
										isFeatured: e.target.value
									})
								}
							}}>
								<div className="mb-3">
									<Form.Check
										type='radio'
										label={"Yes"}
										value={Boolean(true)}
										name='Feature'
									/>
								</div>

								<div className="mb-3">
									<Form.Check
										type='radio'
										label={"No"}
										value={Boolean(false)}
										name='Feature'
									/>
								</div>
						 </Col>

						{/* <Col/> */}

						<Form.Label column sm={1}>
							New Release
						</Form.Label>
						<Col sm={2} className="checkboxContainer" 										
							onClick={e => {
								if(e.target.checked) // returns True or False
								{
									setForm(
									{
										...form,
										isNewRelease: e.target.value
									})
								}
							}}>
								<div  className="mb-3">
									<Form.Check
										type='radio'
										label={"Yes"}
										value={Boolean("true")}
										name='isNewRelease'
									/>
								</div>

								<div className="mb-3">
									<Form.Check
										type='radio'
										label={"No"}
										value={Boolean("false")}
										name='isNewRelease'
									/>
								</div>
						 </Col>

						<Form.Label column sm={1}>
								{form.type === "movies" ? "Run Time" : "No of Seasons"}
						</Form.Label>
						<Col sm={2}>
							<Form.Control value={form.type === "movies" ? `${form.runtime}` : `${form.numOfSeasons}`}
								onChange={form.type === "movies" 
								? e =>
								setForm({
									...form,
									runtime: e.target.value
								})
																
								: e => 
								setForm({
									...form,
									numOfSeasons: e.target.value

								})}
	
								placeholder={form.type === "movies" ? "Run Time" : "No of Seasons"} />
						</Col>
				</Form.Group>

					<Form.Group as={Row} className="mb-3">
					<Col sm={{ span: 10, offset: 2 }}>
						<Button type="submit"> Create / Add </Button>
					</Col>
					</Form.Group>


				</Form>

				{console.log(form)}

			</main>

			<Footer/>

		</div>
	)
}

export default AdminCreatePage;
