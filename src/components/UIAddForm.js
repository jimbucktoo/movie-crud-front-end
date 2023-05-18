import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import UINavbar from "./UINavbar";
import { graphql } from "react-apollo";
import { getMoviesQuery, addMovieMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

class UIAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var title = event.target.title.value;
        var directors = event.target.directors.value;
        var year = parseInt(event.target.year.value);
        var rating = parseInt(event.target.rating.value);
        var poster_url = event.target.posterURL.value;

        this.props
            .addMovieMutation({
                variables: {
                    title: title,
                    directors: directors,
                    year: year,
                    rating: rating,
                    poster_url: poster_url,
                },
                refetchQueries: [{ query: getMoviesQuery }],
            })
            .then(this.setState({ redirectToReferrer: true }));
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;

        if (redirectToReferrer === true) {
            return <Redirect to="/main" />;
        }

        return (
            <div>
                <UINavbar />
                <div className="AddForm movie-add">
                    <form onSubmit={this.handleSubmit}>
                        <br />
                        <label>Add A Movie</label>
                        <div className="form-group">
                            <input
                            required
                            name="title"
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="directors"
                            type="text"
                            className="form-control"
                            id="inputDirectors"
                            placeholder="Directors"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="year"
                            type="text"
                            pattern="[0-9]*"
                            title="A number value is required."
                            className="form-control"
                            id="inputYear"
                            placeholder="Year"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="rating"
                            type="text"
                            pattern="[0-9]*"
                            title="A number value is required."
                            className="form-control"
                            id="inputRating"
                            placeholder="Rating"/>
                        </div>
                        <div className="form-group">
                            <input
                            required
                            name="posterURL"
                            type="text"
                            pattern="https?://.+"
                            title="A valid url value is required."
                            className="form-control"
                            id="inputPosterURL"
                            placeholder="Poster URL"/>
                        </div>
                        <div class="movie-buttons">
                            <button className="btn btn-primary button" type="submit">Submit</button>
                            <Link to="/main" className="btn btn-danger button">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(addMovieMutation, { name: "addMovieMutation" })
)(UIAddForm);
