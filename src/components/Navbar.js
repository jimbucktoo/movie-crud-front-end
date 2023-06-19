import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"
import Profile from "./Profile"
import logo from "../assets/movieCrud.png"
import "../style/style.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navBar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand navBarBrand">
                        <img className="navLogo" alt="Logo" src={logo} />
                    </div>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link nav-links" to="/movies">
                                Movies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-links" to="/movies/add">
                                Add To List
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Profile />
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item profile-links" to="/movies/userMovies">
                                        My Movies
                                    </Link>
                                </li>
                                <li>
                                    <Logout className="profile-links" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
