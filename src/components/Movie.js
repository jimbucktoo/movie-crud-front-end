import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { getMoviesQuery, getMoviesByUserIdQuery, deleteMovieMutation } from '../queries/queries';
import "../style/style.css";

const Movie = (props) => {
    const { movieList, movies, refetchMovies } = props;
    const [deleteMovie ] = useMutation(deleteMovieMutation);

    const handleDelete = (id) => {
        deleteMovie({
            variables: {
                id: id
            },
            refetchQueries: [
                { query: getMoviesQuery },
                { query: getMoviesByUserIdQuery }
            ],
        }).then(() => refetchMovies());
    };

    if (movies) {
        return movies.map((movie) => {
            const editLink = "/movies/edit/" + movie.id;
            const showLink = "/movies/show/" + movie.id;
            return (
                <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-start movie-item">
                    <div className="image-container">
                        <img className="movie-poster" alt="poster" src={movie.poster_url} />
                    </div>
                    <div className="ms-2 me-auto">
                        <div className="movie-info">
                            <div className="fw-bold">
                                <Link className="movie-title" to={showLink}>{movie.title}</Link>
                            </div>
                            <div>Directors: {movie.directors}</div>
                            <div>Year: {movie.year}</div>
                            <div>Rating: {movie.rating}</div>
                        </div>
                        <div className="movie-buttons">
                            <Link to={editLink} className="btn btn-primary movie-button">Edit</Link>
                            <Link to={movieList} className="ml-5px btn btn-danger movie-button" onClick={() => handleDelete(movie.id)}>Delete</Link>
                        </div>
                    </div>
                </li>
            );
        });
    } else {
        return null;
    }
};

export default Movie;
