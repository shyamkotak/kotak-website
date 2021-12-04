import React, { Component } from 'react';
import './App.css';
import Image from './components/Image.js'
import Bio from './components/Bio.js'
import Icon from './components/Icon.js'
import ReactGA from 'react-ga';

class IconList extends Component{
  render() {
    return (
      <div className="inner_div">
        <Icon iclass="fas" icon="envelope" link="mailto:me@shyamkotak.com" color="#000000"/>
        <Icon iclass="fab" icon="twitter" link="https://twitter.com/shyamkotak_" color="#1da1f2"/>
        <Icon iclass="fab" icon="github" link="https://github.com/shyamkotak" color="#333333"/>
        <Icon iclass="fab" icon="linkedin" link="https://www.linkedin.com/in/kotakshyam" color="#0077B5"/>
        // <Icon iclass="far" icon="file-alt" link="Kotak_Resume.pdf" color="#000000"/>
      </div>
    )
  }
}

function initializeGA() {
    ReactGA.initialize('UA-66442804-1');
    ReactGA.pageview('/');
}

class App extends Component {
  render() {
    initializeGA();
    return (
      <div className="outer_div">
        <Image height="200px" width="200px" src="favicon.png" alt="Shyam Kotak"/>
        <Bio head="Shyam Kotak" subhead="Software Engineer"/>
        <IconList />
      </div>
    );
  }
}

export default App;