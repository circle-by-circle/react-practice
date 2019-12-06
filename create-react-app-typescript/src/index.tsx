import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.less";
import * as serviceWorker from "./serviceWorker";
import Home from "./routes/Home";
import Mine from "./routes/Mine";
import Profile from "./routes/Profile";
import "minireset.css";
import store from "./store";
import history from "./store/history";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
