import React, { Component } from 'react'
import UINavbar from './UINavbar'
import UITable from './UITable'
import UIAddForm from './UIAddForm'
import '../style/App.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        const responseOK = await fetch('http://movie-crud-io.herokuapp.com/')
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                return myJson
            })
        this.setState({data: responseOK})
    }   

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <UINavbar />
                <UITable data={this.state.data} />
                <UIAddForm />
            </div>
        )
    }
}

export default App
