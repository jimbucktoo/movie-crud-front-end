import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../style/App.css'

class UIMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            redirectToShow: false
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleDelete(id, event) {
        fetch('https://movie-crud-io.herokuapp.com/' + id, {
            method: 'DELETE',
        }).then(
            this.setState({redirectToReferrer: true})
        )
    }

    handleShow(event) {
        this.setState({redirectToShow: true})
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer
        const redirectToShow = this.state.redirectToShow

        if (redirectToReferrer === true) {
            return <Redirect to='/' />
        }

        const movieList = this.props.data
        if (movieList !== undefined) {
            return (
                movieList.map(movies => {
                    var editLink = '/movies/edit/' + movies.id
                    var showLink = '/movies/show/' + movies.id

                    if (redirectToShow === true) {
                        return <Redirect to={showLink} />
                    } else {
                        return( 
                            <tr key={movies.id} onClick={this.handleShow.bind(this, showLink)}>
                                <th scope='row'>{movies.id}</th>
                                <td>{movies.title}</td>
                                <td>{movies.directors}</td>
                                <td>{movies.year}</td>
                                <td>{movies.my_rating}</td>
                                <td><Link to={editLink} className='ml-5px btn btn-primary'>Edit</Link></td>
                                <td><Link to='/' className='ml-5px btn btn-danger' onClick={this.handleDelete.bind(this, movies.id)}>Delete</Link></td>
                            </tr>
                        )}
                })
            ) 
        } else {
            return <tr></tr>
        }
    }
}

export default UIMovie
