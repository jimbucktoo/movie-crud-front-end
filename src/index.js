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

const client = new ApolloClient({
    uri: "https://moviecrud.onrender.com/graphql",
});

ReactDOM.render(
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
    </ApolloProvider>,
    document.getElementById("root")
);
serviceWorker.unregister();
