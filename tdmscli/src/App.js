import "./App.css";
import React, { Component } from "react";
import LeftSideBar from "./components/LeftSideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <LeftSideBar />
        </Router>
      </Provider>
    );
  }
}

export default App;
