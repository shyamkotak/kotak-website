import React, { Component } from 'react';

import ReactGA from 'react-ga';
import {Router, Route, Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'
//require("history").createBrowserHistory

import Home from './home/Home'
import Blog from './blog/Blog'

const history = createHistory()
ReactGA.initialize('UA-66442804-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Router>
    );
  }
}

export default App;