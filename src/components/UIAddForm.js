import React, { Component } from 'react'
import '../style/App.css'

class UIAddForm extends Component {

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
        console.log(movie)

        fetch('http://movie-crud-io.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie)
        }).then(response => response.json().then(
            response => console.log(response)
        ))
    }

    render() {

        return (
            <div className="AddForm container">
                <form onSubmit={this.handleSubmit}>
                    <label>Add A Movie</label>
                    <div class="form-group">
                        <input name="title" type="text" class="form-control" id="inputTitle" placeholder="Title" />
                    </div>
                    <div class="form-group">
                        <input name="directors" type="text" class="form-control" id="inputDirectors" placeholder="Directors" />
                    </div>
                    <div class="form-group">
                        <input name="year" type="text" class="form-control" id="inputYear" placeholder="Year" />
                    </div>
                    <div class="form-group">
                        <input name="myRating" type="text" class="form-control" id="inputMyRating" placeholder="Your Rating" />
                    </div>
                    <div class="form-group">
                        <input name="posterURL" type="text" class="form-control" id="inputPosterURL" placeholder="Poster URL" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default UIAddForm
