import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import LeftMenu from "./components/layout/LeftMenu";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <LeftMenu />
          <Footer />
          <Route path="/dashboard/:documentId" component={Dashboard} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
