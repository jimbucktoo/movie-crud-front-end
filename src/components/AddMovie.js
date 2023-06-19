import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import Logo from "../assets/movieCrud.png"
import Navbar from "./Navbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery, useMutation } from "@apollo/client"
import { getMoviesQuery, getMoviesByUserIdQuery, getUserByAuthIdQuery, addMovieMutation } from "../queries/queries"
import "../style/style.css"

const AddMovie = (props) => {
    const { user, isAuthenticated } = useAuth0()
    const [redirectToMovies, setRedirectToMovies] = useState(false)
    const [selectedRating, setSelectedRating] = useState(5)
    const [addMovie] = useMutation(addMovieMutation)
    const { data: userData } = useQuery(getUserByAuthIdQuery, {
        variables: {
            authId: isAuthenticated ? user.sub : null,
        },
        skip: !user,
    })

    const goBack = () => {
        props.history.goBack()
    }

    const handleRangeChange = (event) => {
        setSelectedRating(parseInt(event.target.value, 10))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { title, directors, year, rating, posterURL } = event.target
        const user_id = userData.userByAuthId.id

        addMovie({
            variables: {
                title: title.value,
                directors: directors.value,
                year: parseInt(year.value, 10),
                rating: parseInt(rating.value, 10),
                poster_url: posterURL.value,
                user_id: user_id,
            },
            refetchQueries: [
                { query: getMoviesQuery },
                { query: getMoviesByUserIdQuery, variables: { id: user_id } },
            ],
        }).catch((error) => {
            console.error("Error Adding Movie: ", error)
        }).then(() => setRedirectToMovies(true))
    }

    if (redirectToMovies) {
        return <Redirect to="/movies" />
    }

    if (isAuthenticated) {
        return (
            <div>
                <Navbar />
                <div className="AddMovie">
                    <img className="logo" alt="MovieCrud Logo" src={Logo} />
                    <h3 className="heading">Add Movie:</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                            required
                            name="title"
                            type="text"
                            pattern=".*"
                            title="Please enter a valid movie title."
                            className="form-control"
                            id="inputTitle"
                            placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="directors"
                            type="text"
                            pattern="[A-Za-z,\s]+"
                            title="Please enter a valid name for the movie director."
                            className="form-control"
                            id="inputDirectors"
                            placeholder="Directors"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="year"
                            type="text"
                            pattern="^(19|20)\d{2}$"
                            title="Please enter a valid year (1900-2099)."
                            className="form-control"
                            id="inputYear"
                            placeholder="Year"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="posterURL"
                            type="text"
                            pattern="https?://.+"
                            title="Please enter a valid URL starting with http:// or https://"
                            className="form-control"
                            id="inputPosterURL"
                            placeholder="Poster URL"/>
                        </div>
                        <div className="form-group">
                            <label>Rating: {selectedRating}</label>
                            <input
                            required
                            name="rating"
                            type="range"
                            className="custom-range"
                            min="1"
                            max="5"
                            onChange={handleRangeChange}/>
                        </div>
                        <div className="movie-buttons">
                            <button className="btn btn-primary movie-button" type="submit">
                                Submit
                            </button>
                            <button className="btn btn-danger movie-button" onClick={goBack}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export default AddMovie
