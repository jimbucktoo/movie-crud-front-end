import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { useQuery } from '@apollo/client';
import { getMoviesQuery } from '../queries/queries';
import "../style/App.css";

const Movies = (props) => {
    const { data: moviesData, refetch: moviesRefetch } = useQuery(getMoviesQuery);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (moviesData) {
            setMovies(moviesData.movies);
        }
    }, [moviesData]);

    if (moviesData != null) {
        const movieList = "/movies";
        return (
            <div>
                <Navbar />
                <Table movieList={movieList} movies={movies} refetchMovies={moviesRefetch}/>
            </div>
        );
    }

    return (
        <div className="App loader">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Movies;
