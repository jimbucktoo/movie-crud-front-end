import React from "react";
import Navbar from "./Navbar";
import { useQuery } from '@apollo/client';
import { getMovieByIdQuery } from "../queries/queries";
import "../style/style.css";

const ShowMovie = (props) => {
    const { id } = props.match.params;
    const { data: movieData } = useQuery(getMovieByIdQuery, {
        variables: {
            id: id ? id : null
        }
    });

    if (movieData != null) {
        const movie = movieData.movieById;
        return (
            <div>
                <Navbar />
                <div className="ShowMovie">
                    <h3 className="heading">{movie.title}</h3>
                    <img className="poster" alt="Poster" src={movie.poster_url} />
                    <h6>Title: {movie.title}</h6>
                    <h6>Directors: {movie.directors}</h6>
                    <h6>Year: {movie.year}</h6>
                    <h6>Rating: {movie.rating}</h6>
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

export default ShowMovie;
