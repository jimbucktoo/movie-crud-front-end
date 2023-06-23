import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import MovieTable from "./MovieTable"
import { useQuery } from "@apollo/client"
import { getMoviesQuery } from "../queries/queries"
import "../style/style.css"

const Movies = () => {
    const { data: moviesData, refetch: moviesRefetch } = useQuery(getMoviesQuery)
    const [movies, setMovies] = useState(null)
    const movieList = "/movies"

    useEffect(() => {
        if (moviesData) {
            setMovies(moviesData.movies)
        }
    }, [moviesData])

    if (moviesData) {
        return (
            <div className="Movies">
                <Navbar />
                <MovieTable movieList={movieList} movies={movies} refetchMovies={moviesRefetch}/>
            </div>
        )
    }

    return (
        <div className="Movies">
            <Navbar />
            <div className="loader">
                <div className="spinner-border text-primary loader-spinner" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Movies
