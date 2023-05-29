import React from "react";
import Movie from "./Movie";
import "../style/App.css";

const Table = (props) => {
    return (
        <div className="table">
            <ul className="list-group movie-list">
                <Movie movieList={props.movieList}/>
            </ul>
        </div>
    );
};

export default Table;
