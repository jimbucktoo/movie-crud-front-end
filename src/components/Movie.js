import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { useAuth0 } from "@auth0/auth0-react";
import { getMoviesQuery, getMoviesByUserIdQuery, getUserByAuthIdQuery, deleteMovieMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const Movie = (props) => {
    const { user, isAuthenticated } = useAuth0();

    let movies = props.getMoviesQuery.movies;
    let userMovies = props.getMoviesByUserIdQuery.moviesByUserId;
    let userAuth = props.getUserByAuthIdQuery.userByAuthId;

    const authId = isAuthenticated ? user.sub : null;
    const id = userAuth ? userAuth.id : null;

    const handleDelete = (id) => {
        props.deleteMovieMutation({
            variables: {
                id: id,
            },refetchQueries: [{ query: getMoviesQuery }],
        });
    };

    useEffect(() => {
        if (authId) {
            props.getUserByAuthIdQuery.refetch({ authId });
        }
    }, [authId, props.getUserByAuthIdQuery]);

    useEffect(() => {
        if (id) {
            props.getMoviesByUserIdQuery.refetch({ id });
        }
    }, [id, props.getMoviesByUserIdQuery]);

    if (movies && userMovies) {
        if(props.movieList === 1){
            movies = userMovies;
        }
        return movies.map((movie) => {
            const editLink = "/movies/edit/" + movie.id;
            const showLink = "/movies/show/" + movie.id;
            return (
                <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-start movie-item">
                    <div className="image-box">
                        <img className="poster-image" alt="poster" src={movie.poster_url} />
                    </div>
                    <div className="ms-2 me-auto">
                        <div className="movie-info">
                            <div className="fw-bold">
                                <Link className="title" to={showLink}>{movie.title}</Link>
                            </div>
                            <div>Directors: {movie.directors}</div>
                            <div>Year: {movie.year}</div>
                            <div>Rating: {movie.rating}</div>
                        </div>
                        <div className="movie-buttons">
                            <Link to={editLink} className="btn btn-primary button">Edit</Link>
                            <Link to="/movies" className="ml-5px btn btn-danger button" onClick={() => handleDelete(movie.id)}>Delete</Link>
                        </div>
                    </div>
                </li>
            );
        });
    } else {
        return null;
    }
};

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(getUserByAuthIdQuery, {
        options: (props) => {
            return {
                variables: {
                    authId: null
                }
            };
        },
        name: 'getUserByAuthIdQuery'
    }),
    graphql(getMoviesByUserIdQuery, {
        options: (props) => {
            return {
                variables: {
                    id: null
                }
            };
        },
        name: 'getMoviesByUserIdQuery'
    }),
    graphql(deleteMovieMutation, { name: "deleteMovieMutation" })
)(Movie);
