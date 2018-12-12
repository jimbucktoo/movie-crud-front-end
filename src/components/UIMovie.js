import React, { Component } from 'react'
import '../style/App.css'

class UIMovie extends Component {
    render() {
        const movieList = this.props.data
        console.log(movieList)
        if (movieList !== undefined) {
            return (
                movieList.map(movies => {
                    return( 
                        <tr>
                            <th scope='row'>{movies.id}</th>
                            <td>{movies.title}</td>
                            <td>{movies.directors}</td>
                            <td>{movies.year}</td>
                            <td>{movies.my_rating}</td>
                        </tr>
                    )
                })
            ) 
        } else {
            return <tr></tr>
        }
    }
}

export default UIMovie
