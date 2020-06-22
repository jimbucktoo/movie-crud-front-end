import React, { Component } from "react"
import {Link} from "react-router-dom"
import logo from "../assets/movieCrud.png"
import "../style/App.css"

class UINavbar extends Component {

    render() {
        return (
            <div className="Navbar">
            <nav className="navbar navbar-expand-lg navBar">
            <div className="navbar-brand navBarBrand" href="#"><Link className="nav-link color-white" to="/"><img className="dashLogo" src={logo} /></Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link color-white" to="/main">Movies</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link color-white" to="/movies/new">Add To List</Link>
            </li>
            </ul>
            </div>
            </nav>
            </div>
        )
    }
}

export default UINavbar
