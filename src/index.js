import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UIMain from './components/UIMain'
import UIAddForm from './components/UIAddForm'
import UIEditForm from './components/UIEditForm'

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/movies/edit/:id' component={UIEditForm}/>
                <Route path='/movies/new' component={UIAddForm}/>
                <Route exact path='/' component={UIMain} />
            </Switch>
        </BrowserRouter>
    </div>, document.getElementById('root'))
serviceWorker.unregister()
