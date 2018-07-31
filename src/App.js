import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HeaderBar from "./components/HeaderBar";

import Home from "./containers/Home";
import StatementView from "./containers/StatementView";
import UserPage from "./containers/UserPage";
import Search from "./containers/Search";
import TestingView from "./containers/TestingView";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-column">
        <HeaderBar />
        <Route exact path="/" component={Home} />
        <Route path="/statement/:id" component={StatementView} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/testing" component={TestingView} />
        </div>
      </div>
    );
  }
}

export default App
