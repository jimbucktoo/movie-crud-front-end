import React from "react";
import logo from "../assets/movieCrud.png";
import "../style/App.css";
import LoginButton from "./LoginButton";

const Homepage = () => {
    return (
        <div className="container">
            <img className="logo" alt="Logo" src={logo} />
            <h1 className="app-title">MovieCrud</h1>
            <br />
            <LoginButton />
        </div>
    );
};

export default Homepage;
