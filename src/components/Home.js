import React from "react"
import Logo from "../assets/movieCrud.png"
import Login from "./Login"
import "../style/style.css"

const Home = () => {
    return (
        <div className="Home">
            <img className="logo" alt="MovieCrud Logo" src={Logo} />
            <h1 className="app-title">MovieCrud</h1>
            <Login />
        </div>
    )
}

export default Home
