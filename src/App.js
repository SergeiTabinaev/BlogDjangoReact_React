import React, { useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetail";
import PostDetail from "./components/Posts/PostDetail";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  return (
      <div className="App">
          <Router>
            <Navbar></Navbar>
              <Switch>
                  <Route path="/posts/:id" exact component={PostDetail}></Route>
                  <Route path="/category/:id" exact component={CategoryDetail}></Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
