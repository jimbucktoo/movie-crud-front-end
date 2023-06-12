import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery, useMutation } from "@apollo/client"
import { getMoviesQuery, getUserByAuthIdQuery, addMovieMutation } from "../queries/queries"
import "../style/style.css"

const AddMovie = (props) => {
    const goBack = () => {
        props.history.goBack()
    }
    const { user, isAuthenticated } = useAuth0()
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const [ addMovie ] = useMutation(addMovieMutation)
    const { data: userData } = useQuery(getUserByAuthIdQuery, {
        variables: {
            authId: isAuthenticated ? user.sub : null
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const directors = event.target.directors.value
        const year = parseInt(event.target.year.value)
        const rating = parseInt(event.target.rating.value)
        const poster_url = event.target.posterURL.value
        const user_id = userData.userByAuthId.id

        addMovie({
            variables: {
                title: title,
                directors: directors,
                year: year,
                rating: rating,
                poster_url: poster_url,
                user_id: user_id
            },
            refetchQueries: [{ query: getMoviesQuery }]
        }).then(() => {}).catch((error) => {
            console.error("Error Adding Movie: ", error)
        }).then(() => setRedirectToReferrer(true))
    }

    if (redirectToReferrer) {
        return <Redirect to="/movies" />
    }

    if(isAuthenticated) {
        return (
            <div>
                <Navbar />
                <div className="AddMovie">
                    <h3 className="heading">Add Movie:</h3>
                    <form onSubmit={handleSubmit}>
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
                            <button className="btn btn-primary movie-button" type="submit">
                                Submit
                            </button>
                            <Link to="#" className="btn btn-danger movie-button" onClick={goBack}>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <Navbar />
            </div>
        )
    }
}

export default AddMovie
