import React, { Component } from "react"
import {Link, Redirect} from "react-router-dom"
import UINavbar from "./UINavbar"
import "../style/App.css"

class UIAddForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        var movieTitle = event.target.title.value
        var movieDirectors = event.target.directors.value
        var movieYear = event.target.year.value
        var movieRating = event.target.myRating.value
        var moviePosterURL = event.target.posterURL.value

        var movie = {
            title: movieTitle,
            directors: movieDirectors,
            year: movieYear,
            my_rating: movieRating,
            poster_url: moviePosterURL
        }

        fetch("https://movie-crud-io.herokuapp.com/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie)
        }).then(response => response.json().then(
            response => this.setState({redirectToReferrer: true})
        ))
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer

        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <UINavbar />
                <div className="AddForm custom-container">
                    <form onSubmit={this.handleSubmit}>
                        <label>Add A Movie</label>
                        <div className="form-group">
                            <input name="title" type="text" className="form-control" id="inputTitle" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input name="directors" type="text" className="form-control" id="inputDirectors" placeholder="Directors" />
                        </div>
                        <div className="form-group">
                            <input name="year" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputYear" placeholder="Year" />
                        </div>
                        <div className="form-group">
                            <input name="myRating" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputMyRating" placeholder="Your Rating" />
                        </div>
                        <div className="form-group">
                            <input name="posterURL" type="text" pattern="https?://.+" title="A valid url value is required." className="form-control" id="inputPosterURL" placeholder="Poster URL" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="ml-5px btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default UIAddForm
