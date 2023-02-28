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

        fetch("https://moviecrud.onrender.com/", {
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
            return <Redirect to="/main" />
        }

        return (
            <div>
                <UINavbar />
                <div className="AddForm movie-add">
                    <form onSubmit={this.handleSubmit}>
                        <br />
                        <label>Add A Movie</label>
                        <div className="form-group">
                            <input required name="title" type="text" className="form-control" id="inputTitle" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input required name="directors" type="text" className="form-control" id="inputDirectors" placeholder="Directors" />
                        </div>
                        <div className="form-group">
                            <input required name="year" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputYear" placeholder="Year" />
                        </div>
                        <div className="form-group">
                            <input required name="myRating" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputMyRating" placeholder="Rating" />
                        </div>
                        <div className="form-group">
                            <input required name="posterURL" type="text" pattern="https?://.+" title="A valid url value is required." className="form-control" id="inputPosterURL" placeholder="Poster URL" />
                        </div>
    <div class="movie-buttons">
        <button className="btn btn-primary option-button" type="submit">Submit</button>
        <Link to="/main" className="btn btn-danger option-button">Cancel</Link>
    </div>
</form>
    </div>
</div>
)
}
}

export default UIAddForm
