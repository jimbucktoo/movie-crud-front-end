import React, { Component } from 'react'
import UIMovie from './UIMovie'
import '../style/App.css'

class UITable extends Component {
    render() {
        return (
            <div className="Table">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Directors</th>
                            <th scope="col">Year</th>
                            <th scope="col">My Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UIMovie data={this.props.data} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UITable
