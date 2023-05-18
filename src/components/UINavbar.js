import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import logo from "../assets/movieCrud.png";
import "../style/App.css";

class UINavbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav class="navbar navbar-expand-lg navBar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div class="navbar-brand navBarBrand">
                            <img className="navLogo" alt="Logo" src={logo} />
                        </div>
                        <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link nav-links" to="/main">Movies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-links" to="/movies/new">Add To List</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Profile />
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">My Movies</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><LogoutButton /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default UINavbar;
