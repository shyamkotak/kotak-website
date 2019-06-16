import React, { Component } from 'react';

import Image from './components/Image.js'
import IconList from './components/IconList.js'

import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="outer_div">
        <Image height="200px" width="200px" src="favicon.png" alt="Shyam Kotak"/>
        <p className="heading">Shyam Kotak</p>
        <p className="subheading">Software Developer @ BrightEdge</p>
        <IconList />
      </div>
    );
  }
}

export default Home;