import React, { Component } from 'react';

import ReactGA from 'react-ga';
import { Link, Route, Router, Switch } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { createBrowserHistory as createHistory } from 'history'

import Home from './home/Home'
import Blog from './blog/Blog'

const history = createHistory()
ReactGA.initialize('UA-66442804-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
});

class App extends Component {

  constructor(props) {
    super(props);
    let url = window.location.href;
    let last_slash_index = url.lastIndexOf('/');
    let path = url.substring(last_slash_index + 1);

    this.state = {'path':path};
  }
  
  handleChange = (event, value) => {
    this.setState({ 'path': value });
  }

  render() {
    return(
      <Router history={history}>
        <AppBar position="static" color="default">
          <Tabs value={this.state.path} onChange={this.handleChange}>
            <Tab label='Home' value='' component={Link} to="/"></Tab>
            <Tab label='Blog' value='blog' component={Link} to="/blog"></Tab>
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blog" component={Blog}/>
        </Switch>
      </Router>
    )
  }

}

export default App;