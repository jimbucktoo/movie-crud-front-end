import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import { graphql } from "react-apollo";
import { getMoviesQuery, getMovieQuery, updateMovieMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const EditForm = (props) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const { id } = props.match.params;
        const title = event.target.title.value;
        const directors = event.target.directors.value;
        const year = parseInt(event.target.year.value);
        const rating = parseInt(event.target.rating.value);
        const poster_url = event.target.posterURL.value;

        props.updateMovieMutation({
            variables: {
                id: id,
                title: title,
                directors: directors,
                year: year,
                rating: rating,
                poster_url: poster_url,
            },
            refetchQueries: [{ query: getMoviesQuery }],
        }).then(() => setRedirectToReferrer(true));
    };

    if (redirectToReferrer) {
        return <Redirect to="/main" />;
    }

    const movie = props.data.movie

    if(movie !== undefined) {
        return (
            <div>
                <Navbar />
                <br />
                <div className="EditForm movie-edit">
                    <form onSubmit={handleSubmit}>
                        <h6>Edit Movie: {movie.title}</h6>
                        <br />
                        <img alt="Poster URL" src={movie.poster_url} className="poster-url" />
                        <br />
                        <br />
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
                        <div class="movie-buttons">
                            <button className="btn btn-primary button" type="submit">
                                Edit
                            </button>
                            <Link to="/main" className="btn btn-danger button">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
                <br />
                <br />
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

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(getMovieQuery, {
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.id,
                },
            };
        },
    }),
    graphql(updateMovieMutation, { name: "updateMovieMutation" })
)(EditForm);
