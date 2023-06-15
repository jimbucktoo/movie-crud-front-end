import React, { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import { useQuery, useMutation } from "@apollo/client"
import { getMoviesQuery, getMovieByIdQuery, updateMovieMutation } from "../queries/queries"
import "../style/style.css"

const EditMovie = (props) => {
    const goBack = () => {
        props.history.goBack()
    }
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const [selectedRating, setSelectedRating] = useState(5)
    const [ updateMovie ] = useMutation(updateMovieMutation)
    const { id } = props.match.params
    const { data: movieData } = useQuery(getMovieByIdQuery, {
        variables: {
            id: id ? id : null
        },
        skip: !id
    })

    useEffect(() => {
        if (movieData && movieData.movieById && movieData.movieById.rating) {
            setSelectedRating(movieData.movieById.rating)
        }
    }, [movieData])

    const handleRangeChange = (event) => {
        setSelectedRating(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const directors = event.target.directors.value
        const year = parseInt(event.target.year.value)
        const rating = parseInt(event.target.rating.value)
        const poster_url = event.target.posterURL.value

        updateMovie({
            variables: {
                id: id,
                title: title,
                directors: directors,
                year: year,
                rating: rating,
                poster_url: poster_url
            },
            refetchQueries: [{ query: getMoviesQuery }]
        }).then(() => {}).catch((error) => {
            console.error("Error Updating Movie: ", error)
        }).then(() => setRedirectToReferrer(true))
    }

    if (redirectToReferrer) {
        return <Redirect to="/movies" />
    }

    if(movieData) {
        const movie = movieData.movieById
        return (
            <div>
                <Navbar />
                <div className="EditMovie">
                    <h3 className="heading">Edit Movie: {movie.title}</h3>
                    <img alt="Poster" src={movie.poster_url} className="poster" />
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
                            defaultValue={movie.title} />
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
                            defaultValue={movie.directors} />
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
                            defaultValue={movie.year} />
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
                            defaultValue={movie.poster_url} />
                        </div>
                        <div className="form-group">
                            <label>Rating: {selectedRating}</label>
                            <input
                            required
                            name="rating"
                            type="range"
                            className="custom-range"
                            min="0"
                            max="5"
                            value={selectedRating}
                            onChange={handleRangeChange} />
                        </div>
                        <div className="movie-buttons">
                            <button className="btn btn-primary movie-button" type="submit">
                                Submit
                            </button>
                            <Link to="#" className="btn btn-danger movie-button" onClick={goBack}>
                                Cancel
                            </Link>
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

export default EditMovie
