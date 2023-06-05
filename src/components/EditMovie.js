import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import { useQuery, useMutation } from '@apollo/client';
import { getMoviesQuery, getMovieByIdQuery, updateMovieMutation } from "../queries/queries";
import "../style/style.css";

const EditMovie = (props) => {
    const goBack = () => {
        props.history.goBack();
    };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [ updateMovie ] = useMutation(updateMovieMutation);
    const { id } = props.match.params;
    const { data: movieData } = useQuery(getMovieByIdQuery, {
        variables: {
            id: id ? id : null
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const directors = event.target.directors.value;
        const year = parseInt(event.target.year.value);
        const rating = parseInt(event.target.rating.value);
        const poster_url = event.target.posterURL.value;

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
            console.error("Error Updating Movie: ", error);
        }).then(() => setRedirectToReferrer(true));
    };

    if (redirectToReferrer) {
        return <Redirect to="/movies" />;
    }

    if(movieData != null) {
        const movie = movieData.movieById;
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
                            className="form-control"
                            id="inputTitle"
                            placeholder={"Title: " + movie.title}/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="directors"
                            type="text"
                            className="form-control"
                            id="inputDirectors"
                            placeholder={"Director(s): " + movie.directors}/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="year"
                            type="text"
                            pattern="[0-9]*"
                            title="A number value is required."
                            className="form-control"
                            id="inputYear"
                            placeholder={"Year: " + movie.year}/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="rating"
                            type="text"
                            pattern="[0-9]*"
                            title="A number value is required."
                            className="form-control"
                            id="inputRating"
                            placeholder={"Rating: " + movie.rating}/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="posterURL"
                            type="text"
                            pattern="https://.+"
                            title="A valid URL value is required."
                            className="form-control"
                            id="inputPosterURL"
                            placeholder={"Poster URL: " + movie.poster_url}/>
                        </div>
                        <div className="movie-buttons">
                            <button className="btn btn-primary movie-button" type="submit">
                                Edit
                            </button>
                            <Link to="#" className="btn btn-danger movie-button" onClick={goBack}>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
            </div>
        );
    }

};

export default EditMovie;
