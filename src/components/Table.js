import React from "react";
import Movie from "./Movie";
import "../style/App.css";

const Table = (props) => {
    return (
        <div className="table">
            <ul className="list-group movie-list">
                <Movie data={props.data} filterDelete={props.filterDelete} />
            </ul>
        </div>
    );
};

export default Table;
