import React from "react";
import Logo from "../assets/movieCrud.png";
import LoginButton from "./LoginButton";
import "../style/App.css";

const Home = () => {
    return (
        <div className="container">
            <img className="logo" alt="MovieCrud Logo" src={Logo} />
            <h1 className="app-title">MovieCrud</h1>
            <LoginButton />
        </div>
    );
};

export default Home;
