import React, { Component } from "react"
import UINavbar from "./UINavbar"
import UITable from "./UITable"
import "../style/App.css"

class UIMain extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        const responseOK = await fetch("https://moviecrud.onrender.com/")
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                return myJson
            })
        this.setState({data: responseOK})
    }   

    filterDelete(id){
        let filtering = this.state.data.filter(movie => {
            if (movie.id !== id){
                return movie
            }
        })
        this.setState({data: filtering})
    }

    render() {
        if (this.state.data !== undefined){
            return (
                <div className="App">
                    <UINavbar />
                    <UITable data={this.state.data} filterDelete={this.filterDelete.bind(this)}/>
                </div>
            )
        }

        return (
            <div className="App loader">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default UIMain
