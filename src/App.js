import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
// import BottomBar from "./components/BottomBar";

import Home from "./containers/Home";
import StatementView from "./containers/StatementView";
import UserPage from "./containers/UserPage";
import Search from "./containers/Search";
import TestingView from "./containers/TestingView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/statement" component={StatementView} /> */}
        <Route path="/statement/:id" component={StatementView} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/testing" component={TestingView} />
        {/* <BottomBar /> */}
      </div>
    );
  }
}

export default App
