import React, { Component } from 'react'
import '../style/App.css'

class UITable extends Component {
    render() {
        console.log(this.props)
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
                        <tr>
                            <th scope="row">1</th>
                            <td>This Is The End</td>
                            <td>Seth Rogen, Evan Goldberg</td>
                            <td>2013</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UITable
