import React, { Component } from "react"
import UINavbar from "./UINavbar"
import UITable from "./UITable"
import "../style/App.css"

class UIMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        const responseOK = await fetch("https://movie-crud-io.herokuapp.com/")
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
        return (
            <div className="App">
                <UINavbar />
                <UITable data={this.state.data} filterDelete={this.filterDelete.bind(this)}/>
            </div>
        )
    }
}

export default UIMovie
