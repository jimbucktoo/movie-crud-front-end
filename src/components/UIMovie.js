import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { getMoviesQuery, deleteMovieMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

class UIMovie extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id, event) {
        this.props.deleteMovieMutation({
            variables: {
                id: id,
            },
            refetchQueries: [{ query: getMoviesQuery }],
        });
    }

    render() {
        const movieList = this.props.getMoviesQuery.movies;

        if (movieList !== undefined) {
            return movieList.map((movies) => {
                var editLink = "/movies/edit/" + movies.id;
                var showLink = "/movies/show/" + movies.id;
                return (
                    <li class="list-group-item d-flex justify-content-between align-items-start movie-item">
                        <div class="image-box">
                            <img
                                class="poster-image"
                                alt="poster"
                                src={movies.poster_url}
                            ></img>
                        </div>
                        <div class="ms-2 me-auto">
                            <div class="movie-info">
                                <div class="fw-bold">
                                    <Link class="movie-title" to={showLink}>
                                        {movies.title}
                                    </Link>
                                </div>
                                <div>Directors: {movies.directors}</div>
                                <div>Year: {movies.year}</div>
                                <div>Rating: {movies.rating}</div>
                            </div>
                            <div class="movie-buttons">
                                <Link
                                    to={editLink}
                                    className="btn btn-primary option-button"
                                >
                                    Edit
                                </Link>
                                <Link
                                    to="/main"
                                    className="ml-5px btn btn-danger option-button"
                                    onClick={this.handleDelete.bind(
                                        this,
                                        movies.id
                                    )}
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </li>
                );
            });
        } else {
            return <tr></tr>;
        }
    }
}

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(deleteMovieMutation, { name: "deleteMovieMutation" })
)(UIMovie);
