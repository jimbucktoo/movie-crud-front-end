import React from "react";
import Navbar from "./Navbar";
import { graphql } from "react-apollo";
import { getMovieQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const Show = (props) => {
    const movie = props.data.movie;

    if (movie !== undefined) {
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

export default compose(
    graphql(getMovieQuery, {
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.id,
                },
            };
        },
    })
)(Show);
