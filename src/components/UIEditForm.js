import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import UINavbar from './UINavbar'
import '../style/App.css'

class UIEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        fetch('http://movie-crud-io.herokuapp.com/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie)
        }).then(response => response.json().then(
            response => this.setState({redirectToReferrer: true})
        ))
    }

    render() {
        console.log(this.state)
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <UINavbar />
                <div className='EditForm custom-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Edit A Movie</label>
                        <div className='form-group'>
                            <input name='title' type='text' className='form-control' id='inputTitle' placeholder='Title' />
                        </div>
                        <div className='form-group'>
                            <input name='directors' type='text' className='form-control' id='inputDirectors' placeholder='Directors' />
                        </div>
                        <div className='form-group'>
                            <input name='year' type='text' className='form-control' id='inputYear' placeholder='Year' />
                        </div>
                        <div className='form-group'>
                            <input name='myRating' type='text' className='form-control' id='inputMyRating' placeholder='Your Rating' />
                        </div>
                        <div className='form-group'>
                            <input name='posterURL' type='text' className='form-control' id='inputPosterURL' placeholder='Poster URL' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Edit</button>
                        <Link to='/' className='ml-5px btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default UIEditForm
