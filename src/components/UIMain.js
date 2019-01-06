import React, { Component } from 'react'
import UINavbar from './UINavbar'
import UITable from './UITable'
import '../style/App.css'

class UIMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        const responseOK = await fetch('https://movie-crud-io.herokuapp.com/')
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                return myJson
            })
        this.setState({data: responseOK})
    }   

    render() {
        return (
            <div className='App'>
                <UINavbar />
                <UITable data={this.state.data} />
            </div>
        )
    }
}

export default UIMovie
