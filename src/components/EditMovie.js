import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useQuery, useMutation } from "@apollo/client"
import { getMoviesQuery, getMovieByIdQuery, updateMovieMutation } from "../queries/queries"
import "../style/style.css"

const EditMovie = (props) => {
    const [selectedRating, setSelectedRating] = useState(5)
    const [ updateMovie ] = useMutation(updateMovieMutation)
    const { id } = props.match.params
    const { data: movieData } = useQuery(getMovieByIdQuery, {
        variables: {
            id: id ? id : null
        },
        skip: !id
    })

    const goBack = () => {
        props.history.goBack()
    }

    const handleRangeChange = (event) => {
        setSelectedRating(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { title, directors, year, rating, posterURL } = event.target

        updateMovie({
            variables: {
                id: id,
                title: title.value,
                directors: directors.value,
                year: parseInt(year.value),
                rating: parseInt(rating.value),
                poster_url: posterURL.value
            },
            refetchQueries: [{ query: getMoviesQuery }]
        }).catch((error) => {
            console.error("Error Updating Movie: ", error)
        }).then(() => goBack())
    }

    useEffect(() => {
        if (movieData && movieData.movieById && movieData.movieById.rating) {
            setSelectedRating(movieData.movieById.rating)
        }
    }, [movieData])

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
                            min="1"
                            max="5"
                            value={selectedRating}
                            onChange={handleRangeChange} />
                        </div>
                        <div className="movie-buttons">
                            <button className="btn btn-primary movie-button" type="submit">
                                Submit
                            </button>
                            <button className="btn btn-danger movie-button" type="button" onClick={goBack}>
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

export default EditMovie
