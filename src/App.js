import "./App.css";
import DealsView from "./pages/deals-view/deals-view";
import DealsDetailView from "./pages/deals-detail-view/deals-detail-view";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <DealsView />}></Route>
            <Route
              path="/detail/:id"
              render={() => <DealsDetailView />}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
