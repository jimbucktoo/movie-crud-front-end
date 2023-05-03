import React, { Component } from "react";
import UINavbar from "./UINavbar";
import { graphql } from "react-apollo";
import { getMovieQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

class UIShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const movie = this.props.data.movie;

        if (movie !== undefined) {
            return (
                <div>
                    <UINavbar />
                    <div class="movie-show">
                        <br />
                        <img
                            className="poster-url"
                            alt="Poster URL"
                            src={movie.poster_url}
                        ></img>
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
                    <UINavbar />
                </div>
            );
        }
    }
}

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
)(UIShow);
