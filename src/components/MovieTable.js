import React from "react"
import Movie from "./Movie"
import "../style/style.css"

const MovieTable = (props) => {
    return (
        <div className="MovieTable">
            <ul className="list-group movie-list">
                <Movie className="Movie" movieList={props.movieList} movies={props.movies} refetchMovies={props.refetchMovies}/>
            </ul>
        </div>
    )
}

export default MovieTable
