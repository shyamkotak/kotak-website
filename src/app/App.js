import React, { Component } from 'react';

import ReactGA from 'react-ga';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
    return(
      <div>
        <BrowserRouter history={history}>
          <AppBar position="static" color="default">
            <Tabs onChange={this.handleChange}>
              <Tab label='Home' component={Link} to="/"></Tab>
              <Tab label='Blog' component={Link} to="/blog"></Tab>
            </Tabs>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;