import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { graphql } from "react-apollo";
import { getMoviesQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const Movies = (props) => {
    const movies = props.getMoviesQuery.movies;
    const movieList = 0;

    if (movies != null) {
        return (
            <div>
                <Navbar />
                <Table movieList={movieList}/>
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

export default compose(graphql(getMoviesQuery, { name: "getMoviesQuery" }))(Movies);
