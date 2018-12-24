import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../style/App.css'

class UIMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id, event) {
        fetch('http://movie-crud-io.herokuapp.com/' + id, {
            method: 'DELETE',
        }).then(
            this.setState({redirectToReferrer: true})
        )
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;

        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }

        const movieList = this.props.data
        console.log(movieList)
        if (movieList !== undefined) {
            return (
                movieList.map(movies => {
                    var editLink = '/movies/edit/' + movies.id
                    return( 
                        <tr key={movies.id}>
                            <th scope='row'>{movies.id}</th>
                            <td>{movies.title}</td>
                            <td>{movies.directors}</td>
                            <td>{movies.year}</td>
                            <td>{movies.my_rating}</td>
                            <td><Link to={editLink} className='ml-5px btn btn-primary'>Edit</Link></td>
                            <td><Link to='/' className='ml-5px btn btn-danger' onClick={this.handleDelete.bind(this, movies.id)}>Delete</Link></td>
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
