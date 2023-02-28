import React, { Component } from "react"
import {Link} from "react-router-dom"
import logo from "../assets/movieCrud.png"
import "../style/App.css"

class UIHomepage extends Component {

    render() {
        return (
            <div className="login">
            <img className="logo" alt="Logo" src={logo} />
            <h1 className="title">MovieCrud</h1>
            <br />
            <Link to="/main" className="enter ml-5px btn btn-primary">Enter</Link>
            </div>
        )
    }
}

export default UIHomepage
