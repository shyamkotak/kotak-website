import React, { Component } from 'react';

import Image from './components/Image.js'
import Bio from './components/Bio.js'
import IconList from './components/IconList.js'

import './Home.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div className="outer_div">
          <Image height="200px" width="200px" src="favicon.png" alt="Shyam Kotak"/>
          <Bio head="Shyam Kotak" subhead="Software Developer @ BrightEdge"/>
          <IconList />
        </div>
      </div>
    );
  }
}

export default Home;