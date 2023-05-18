import React, { Component } from "react";
import logo from "../assets/movieCrud.png";
import "../style/App.css";
import LoginButton from "./LoginButton";

class UIHomepage extends Component {
    render() {
        return (
            <div className="container">
                <img className="logo" alt="Logo" src={logo} />
                <h1 className="title">MovieCrud</h1>
                <br />
                <LoginButton />
            </div>
        );
    }
}

export default UIHomepage;
