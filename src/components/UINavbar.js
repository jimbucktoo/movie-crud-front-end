import React, { Component } from "react"
import {Link} from "react-router-dom"
import logo from "../assets/movieCrud.png"
import "../style/App.css"

class UINavbar extends Component {

    render() {
        return (
            <div className="Navbar">
            <nav class="navbar navbar-expand-lg navBar navbar-dark bg-dark">
                <div class="container-fluid">
                    <div class="navbar-brand navBarBrand"><img className="dashLogo" alt="Logo" src={logo} /></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link color-white" to="/main">Movies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link color-white" to="/movies/new">Add To List</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link color-white" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default UINavbar
