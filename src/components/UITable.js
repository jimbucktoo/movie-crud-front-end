import React, { Component } from "react"
import UIMovie from "./UIMovie"
import "../style/App.css"

class UITable extends Component {

    render() {
        return (
            <div className="Table">
            <ul class="list-group movie-list">
                <UIMovie data={this.props.data} filterDelete={this.props.filterDelete} />
            </ul>
        </div>
        )
    }
}

export default UITable
