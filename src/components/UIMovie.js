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
                        <tr key={movies.id}>
                            <th scope='row'>{movies.id}</th>
                            <td>{movies.title}</td>
                            <td>{movies.directors}</td>
                            <td>{movies.year}</td>
                            <td>{movies.my_rating}</td>
                            <td><button className='btn btn-primary'>Edit</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
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
