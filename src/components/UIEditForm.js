import React, { Component } from "react"
import {Link, Redirect} from "react-router-dom"
import UINavbar from "./UINavbar"
import "../style/App.css"

class UIEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        const {id} = this.props.match.params
        const movieResponse = await fetch("https://movie-crud-io.herokuapp.com/" + id)
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                return myJson
            })
        this.setState({movie: movieResponse})
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

        const {id} = this.props.match.params
        fetch("https://movie-crud-io.herokuapp.com/" + id, {
            method: "PUT",
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

        if(this.state.movie !== undefined){
            return (
                <div>
                    <UINavbar />
                    <div className="EditForm custom-container">
                        <form onSubmit={this.handleSubmit}>
                            <h6>Edit Movie Review: {this.state.movie.title}</h6>
                            <br />
                            <img alt="Poster URL" src={this.state.movie.poster_url} className="poster_url"></img>
                            <br />
                            <br />
                            <div className="form-group">
                                <input required name="title" type="text" className="form-control" id="inputTitle" placeholder={"Title: " + this.state.movie.title} />
                            </div>
                            <div className="form-group">
                                <input required name="directors" type="text" className="form-control" id="inputDirectors" placeholder={"Director(s): " + this.state.movie.directors} />
                            </div>
                            <div className="form-group">
                                <input required name="year" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputYear" placeholder={"Year: " + this.state.movie.year} />
    </div>
    <div className="form-group">
        <input required name="myRating" type="text" pattern="[0-9]*" title="A number value is required." className="form-control" id="inputMyRating" placeholder={"Rating: " + this.state.movie.my_rating} />
    </div>
    <div className="form-group">
        <input required name="posterURL" type="text" pattern="https://.+" title="A valid url value is required." className="form-control" id="inputPosterURL" placeholder={"Poster URL: " + this.state.movie.poster_url} />
    </div>
    <button type="submit" className="btn btn-primary">Edit</button>
    <Link to="/main" className="ml-5px btn btn-danger">Cancel</Link>
</form>
    </div>
    <br />
    <br />
</div>
)
} else {
    return <div></div>
}
}
}

export default UIEditForm
