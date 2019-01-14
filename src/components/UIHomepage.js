import React, { Component } from "react"
import {Link} from "react-router-dom"
import "../style/App.css"

class UIHomepage extends Component {
    render() {
        return (
            <div>
                <i className="material-icons jumbo-size">movie</i>
                <h1>Movie CRUD</h1>
                <br />
                <Link to="/" className="ml-5px btn btn-dark">Enter</Link>
            </div>
        )
    }
}

export default UIHomepage
