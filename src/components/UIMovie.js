import React, { Component } from "react"
import {Link} from "react-router-dom"
import "../style/App.css"

class UIMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toShow: false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id, event) {
        fetch("https://movie-crud-io.herokuapp.com/" + id, {
            method: "DELETE",
        }).then(() => {
            this.setState({toShow: false})
            this.props.filterDelete(id)
        })
    }

    render() {
        const movieList = this.props.data
        if (movieList !== undefined) {
            return(
                movieList.map(movies => {
                    var editLink = "/movies/edit/" + movies.id
                    var showLink = "/movies/show/" + movies.id
                    return( 
                        <tr key={movies.id}>
                            <th scope="row"><Link className="show-link" to={showLink}>{movies.id}</Link></th>
                            <td><Link className="show-link" to={showLink}>{movies.title}</Link></td>
                            <td><Link className="show-link" to={showLink}>{movies.directors}</Link></td>
                            <td><Link className="show-link" to={showLink}>{movies.year}</Link></td>
                            <td><Link className="show-link" to={showLink}>{movies.my_rating}</Link></td>
                            <td><Link to={editLink} className="ml-5px btn btn-primary">Edit</Link></td>
                            <td><Link to="/main" className="ml-5px btn btn-danger" onClick={this.handleDelete.bind(this, movies.id)}>Delete</Link></td>
                        </tr>
                    )
                })
            )
        } else {
            return <tr></tr>
        }
    }
}

export default UIMovie
