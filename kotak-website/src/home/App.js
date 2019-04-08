import React, { Component } from 'react';
import './App.css';
import Image from './components/Image.js'
import Bio from './components/Bio.js'
import Icon from './components/Icon.js'

// Het - should this be in it's own file too?
class IconList extends Component{
  render() {
    const icons = [[["fas", "envelope"], "mailto:me@shyamkotak.com", "#000000"],
                   [["fab", "twitter"], "https://twitter.com/shyamkotak_", "#1da1f2"],
                   [["fab", "github"], "https://github.com/shyamkotak", "#333333"],
                   [["fab", "linkedin"], "https://www.linkedin.com/in/kotakshyam", "#0077B5"],
                   [["far", "file-alt"], "Kotak_Resume.pdf", "#000000"]];
    var list = [];
    for (var i = 0; i < icons.length; i++) {
      list.push(<Icon icon={icons[i]} />)
    }

    return (
      <div className="inner_div">
        {list}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="outer_div">
        <Image height="200px" width="200px" src="favicon.png"/>
        <Bio head="Shyam Kotak" subhead="Software Developer @ BrightEdge"/>
        <IconList />
      </div>
    );
  }
}

export default App;