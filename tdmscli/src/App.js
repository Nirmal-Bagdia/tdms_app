import "./App.css";
import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/project/Sidebar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Sidebar />
          <Route path="/dashboard/:documentId" component={Dashboard} />
        </Router>
      </Provider>
    );
  }
}

export default App;
