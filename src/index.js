import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/index.css";

import UIMain from "./components/UIMain";
import UIAddForm from "./components/UIAddForm";
import UIEditForm from "./components/UIEditForm";
import UIShow from "./components/UIShow";
import UIHomepage from "./components/UIHomepage";

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
                    <Route path="/movies/show/:id" component={UIShow} />
                    <Route path="/movies/edit/:id" component={UIEditForm} />
                    <Route path="/movies/new" component={UIAddForm} />
                    <Route path="/main" component={UIMain} />
                    <Route exact path="/" component={UIHomepage} />
                </Switch>
            </BrowserRouter>
        </div>
    </ApolloProvider>
    </Auth0Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
