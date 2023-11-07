import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@apollo/client";
import {
    getMoviesQuery,
    getMoviesByUserIdQuery,
    getUserByAuthIdQuery,
    deleteMovieMutation,
} from "../queries/queries";
import "../style/style.css";

const Movie = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const { movieList, movies, refetchMovies } = props;
    const [deleteMovie] = useMutation(deleteMovieMutation);

    const { data: userData } = useQuery(getUserByAuthIdQuery, {
        variables: {
            authId: isAuthenticated ? user.sub : null,
        },
        skip: !user,
    });

    const handleDelete = (id) => {
        const user_id = userData.userByAuthId.id;
        deleteMovie({
            variables: {
                id: id,
            },
            refetchQueries: [
                { query: getMoviesQuery },
                { query: getMoviesByUserIdQuery, variables: { id: user_id } },
            ],
        })
            .then(() => refetchMovies())
            .catch((error) => {
                console.error("Error deleting movie: ", error);
            });
    };

    if (movies) {
        const sortedMovies = movies.slice().sort((a, b) => a.id - b.id);
        return (
            <div className="row justify-content-md-center">
                {sortedMovies.map((movie) => {
                    const editLink = "/movies/edit/" + movie.id;
                    const showLink = "/movies/show/" + movie.id;
                    return (
                        <div key={movie.id} className="col-md-auto">
                            <div className="list-group-item Movie">
                                <Link className="image-container" to={showLink}>
                                    <img className="movie-poster" alt="poster" src={movie.poster_url} />
                                </Link>
                                <div className="me-auto movie-details">
                                    <div className="movie-info">
                                        <div className="fw-bold movie-title">
                                            <Link className="movie-title-link" to={showLink}>
                                                {movie.title}
                                            </Link>
                                        </div>
                                        <div className="movie-directors">Directors: {movie.directors}</div>
                                        <div>Year: {movie.year}</div>
                                        <div>Rating: {movie.rating}</div>
                                    </div>
                                    {movieList === "/movies/userMovies" ? (
                                        <div className="movie-buttons">
                                            <Link to={editLink} className="btn btn-primary movie-button">
                                                Edit
                                            </Link>
                                            <Link
                                            to={movieList}
                                            className="ml-5px btn btn-danger movie-button"
                                            onClick={() => handleDelete(movie.id)}>
                                            Delete
                                        </Link>
                                    </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
                    </div>
        );
    } else {
        return null;
    }
};

export default Movie;
