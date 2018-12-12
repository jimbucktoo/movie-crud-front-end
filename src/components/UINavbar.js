import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/App.css'

class UINavbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a class='navbar-brand' href='#'><i class='material-icons'>movie</i>Movie CRUD</a>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                        <ul class='navbar-nav'>
                            <li class='nav-item'>
                                <Link class='nav-link' to='/'>Movies</Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link' to='/movies/new'>Add To List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default UINavbar
