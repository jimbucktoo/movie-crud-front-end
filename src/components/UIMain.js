import React, { Component } from "react";
import UINavbar from "./UINavbar";
import UITable from "./UITable";
import { graphql } from "react-apollo";
import { getMoviesQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

class UIMain extends Component {
    render() {
        const movies = this.props.getMoviesQuery.movies;
        if (movies !== undefined) {
            return (
                <div className="App">
                    <UINavbar />
                    <UITable />
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
    }
}

export default compose(graphql(getMoviesQuery, { name: "getMoviesQuery" }))(
    UIMain
);
