import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { graphql } from "react-apollo";
import { getMoviesQuery, getUserAuthQuery, addMovieMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import "../style/App.css";

const AddForm = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const authId = isAuthenticated ? user.sub : "";

    useEffect(() => {
        if (authId) {
            props.getUserAuthQuery.refetch({ authId });
        }
    }, [authId, props.getUserAuthQuery]);

    const userAuth = props.getUserAuthQuery.userAuth;

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const directors = event.target.directors.value;
        const year = parseInt(event.target.year.value);
        const rating = parseInt(event.target.rating.value);
        const poster_url = event.target.posterURL.value;

        if (userAuth !== null) {
            const user_id = parseInt(userAuth.id);
            props.addMovieMutation({
                variables: {
                    title: title,
                    directors: directors,
                    year: year,
                    rating: rating,
                    poster_url: poster_url,
                    user_id: user_id
                },
                refetchQueries: [{ query: getMoviesQuery }],
            }).then(() => setRedirectToReferrer(true));
        }
    };

    if (redirectToReferrer) {
        return <Redirect to="/main" />;
    }

    if(isAuthenticated) {
        return (
            <div>
                <Navbar />
                <div className="AddForm movie-add">
                    <form onSubmit={handleSubmit}>
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
                            title="A valid URL value is required."
                            className="form-control"
                            id="inputPosterURL"
                            placeholder="Poster URL"/>
                        </div>
                        <div className="movie-buttons">
                            <button className="btn btn-primary button" type="submit">
                                Submit
                            </button>
                            <Link to="/main" className="btn btn-danger button">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return(
            <Navbar />
        );
    }
};

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(getUserAuthQuery, {
        options: (props) => {
            return {
                variables: {
                    authId: props.authId
                }
            };
        },
        name: 'getUserAuthQuery'
    }),
    graphql(addMovieMutation, { name: "addMovieMutation" })
)(AddForm);
