import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { graphql } from "react-apollo";
import { getMoviesQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const Movies = (props) => {
    const movies = props.getMoviesQuery.movies;

    if (movies !== undefined) {
        return (
            <div className="App">
                <Navbar />
                <Table />
            </div>
        );
    }

    return (
        <div className="App loader">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default compose(graphql(getMoviesQuery, { name: "getMoviesQuery" }))(Movies);
