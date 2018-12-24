import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UIMain from './components/UIMain'
import UIAddForm from './components/UIAddForm'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/movies/new' component={UIAddForm}/>
                <Route path='/' component={UIMain} />
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('root'))
serviceWorker.unregister()
