import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/style.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Auth0Provider } from "@auth0/auth0-react";

import Home from "./components/Home";
import Movies from "./components/Movies";
import UserMovies from "./components/UserMovies";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import ShowMovie from "./components/ShowMovie";
import Settings from "./components/Settings";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
});

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
        redirect_uri: window.location.origin + "/movies"
    }}>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
    </Auth0Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
