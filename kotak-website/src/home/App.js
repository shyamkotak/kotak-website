import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class Image extends Component{
  render() {
    const styles = {width: '200px', height:'200px', display:'inline-block'}
    return (
      <div className="inner_div">
        <img style={styles} src="favicon.png"></img>
      </div>
    )
  }
}

class Bio extends Component{
  render() {
    return (
      <div className="inner_div">
        <h2>Shyam Kotak</h2>
        <h3>Software Developer @ BrightEdge</h3>
      </div>
    )
  }
}

function Icon(props){
  const icon = props.icon[0]
  const link = props.icon[1]
  const styles_black = {'color':'black'}
  const styles = {'color':props.icon[2]}
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="fa-stack fa-2x">
        <FontAwesomeIcon style={styles_black} className="fa-stack-2x" icon={["far", "circle"]}/>
        <FontAwesomeIcon style={styles} className="fa-stack-1x" icon={icon}/>
      </span>
    </a>
  );
}

class IconList extends Component{
  render() {
    const icons = [[["fas", "envelope"], "mailto:me@shyamkotak.com", "#000000"],
                   [["fab", "twitter"], "https://twitter.com/shyamkotak_", "#1da1f2"],
                   [["fab", "github"], "https://github.com/shyamkotak", "#333"],
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
        <Image />
        <Bio />
        <IconList />
      </div>
    );
  }
}

export default App;