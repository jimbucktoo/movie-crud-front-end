import React from "react";
import Logo from "../assets/movieCrud.png";
import Movies from "../assets/movies.jpg";
import Login from "./Login";
import "../style/style.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="main-content">
        <img className="logo" alt="MovieCrud Logo" src={Logo} />
        <h1 className="app-title">MovieCrud</h1>
        <Login />
      </div>
      <div className="side-panel">
        <img className="descriptionLogo" alt="MovieCrud Logo" src={Movies} />
        <h2 className="side-panel-title">Welcome to MovieCrud</h2>
        <p className="side-panel-description">
          MovieCrud is a full-stack web application that enables users to
          create, edit, share, and discuss in-depth movie reviews. Dive into the
          world of cinema and engage with a community of movie enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default Home;
