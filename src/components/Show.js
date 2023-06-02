import React from "react";
import Navbar from "./Navbar";
import { useQuery } from '@apollo/client';
import { getMovieByIdQuery } from "../queries/queries";
import "../style/App.css";

const Show = (props) => {
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
                <div className="movie-show">
                    <br />
                    <img className="poster-url" alt="Poster URL" src={movie.poster_url} />
                    <br />
                    <br />
                    <br />
                    Title: {movie.title}
                    <br />
                    Directors: {movie.directors}
                    <br />
                    Year: {movie.year}
                    <br />
                    Rating: {movie.rating}
                    <br />
                    <br />
                    <br />
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

export default Show;
