import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/index.css";

import Main from "./components/Main";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Show from "./components/Show";
import Homepage from "./components/Homepage";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { Auth0Provider } from "@auth0/auth0-react";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
});

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
        redirect_uri: window.location.origin + "/main"
    }}>
    <ApolloProvider client={client}>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/movies/show/:id" component={Show} />
                    <Route path="/movies/edit/:id" component={EditForm} />
                    <Route path="/movies/new" component={AddForm} />
                    <Route path="/main" component={Main} />
                    <Route exact path="/" component={Homepage} />
                </Switch>
            </BrowserRouter>
        </div>
    </ApolloProvider>
    </Auth0Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
