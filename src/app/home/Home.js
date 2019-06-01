import React, { Component } from 'react';

import Image from './components/Image.js'
import Bio from './components/Bio.js'
import IconList from './components/IconList.js'

import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="outer_div">
        <Image height="200px" width="200px" src="favicon.png" alt="Shyam Kotak"/>
        <Bio head="Shyam Kotak" subhead="Software Developer @ BrightEdge"/>
        <IconList />
      </div>
    );
  }
}

export default Home;