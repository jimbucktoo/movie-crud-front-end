import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Auth0Provider } from "@auth0/auth0-react"
import AuthContext from './AuthContext'
import "./style/style.css"

import Home from "./components/Home"
import Movies from "./components/Movies"
import UserMovies from "./components/UserMovies"
import AddMovie from "./components/AddMovie"
import EditMovie from "./components/EditMovie"
import ShowMovie from "./components/ShowMovie"
import Settings from "./components/Settings"

const App = () => {
    const [token, setToken] = useState("")
    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
        headers: {
            Authorization: token ? `${token}` : "",
        }
    })

    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin + "/movies" }}>
            <ApolloProvider client={client}>
                <AuthContext.Provider value={{ token, setToken }}>
                    <div>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/settings" component={Settings} />
                                <Route path="/movies/show/:id" component={ShowMovie} />
                                <Route path="/movies/edit/:id" component={EditMovie} />
                                <Route path="/movies/add" component={AddMovie} />
                                <Route path="/movies/userMovies" component={UserMovies} />
                                <Route path="/movies" component={Movies} />
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </AuthContext.Provider>
            </ApolloProvider>
        </Auth0Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
