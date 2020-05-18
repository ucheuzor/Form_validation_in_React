import React from "react";
import "./app.scss";
import Header from "./Header";
import Wall from "./Wall";
import SidebarLogin from "./SidebarLogin";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Route path="/">
          <Header />
          <main className="main">
            <div className="container-990 flex">
              <Wall />
              <SidebarLogin />
            </div>
          </main>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
};

export default App;
