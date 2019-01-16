import React, { Component } from "react"
import UINavbar from "./UINavbar"
import "../style/App.css"

class UIShow extends Component {

    constructor(props) {
        super(props)
        this.state = {}
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

    render() {
        const movie = this.state.movie
        if(movie !== undefined){
            return (
                <div>
                    <UINavbar />
                    <div>
                        <br />
                        {movie.title}
                        <br />
                        <br />
                        <img className="poster_url" alt="Poster URL" src={movie.poster_url}></img>
                        <br />
                        <br />
                        <br />
                        Title: {movie.title}
                        <br />
                        Directors: {movie.directors}
                        <br />
                        Year: {movie.year}
                        <br />
                        Rating: {movie.my_rating}
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default UIShow
