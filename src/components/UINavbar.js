import React, { Component } from "react"
import {Link} from "react-router-dom"
import "../style/App.css"

class UINavbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand" href="#"><i className="material-icons">movie</i><Link className="nav-link color-white" to="/main">MovieCrud</Link></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/main">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies/new">Add To List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default UINavbar
