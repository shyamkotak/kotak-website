import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {

  constructor(props) {
    super()

    this.iclass = props.iclass
    this.icon = props.icon;
    this.link = props.link
    this.color = props.color

    this.state = {
      hover : false
    }

  }

  render() {

    var styles;
    if (this.state.hover) {
      styles = {'color':this.color}
    } else {
      styles = {'color':'gray'}
    }

    return (
      <a 
        style={styles}
        className="fa-stack fa-2x"
        href={this.link}
        target="_blank"
        onMouseEnter={() => this.setState({hover : true})}
        onMouseLeave={() => this.setState({hover : false})}
        rel="noopener noreferrer">
          <FontAwesomeIcon 
            className="fa-stack-2x"
            icon={["far", "circle"]}
          />
          <FontAwesomeIcon
            className="fa-stack-1x"
            icon={[this.iclass, this.icon]}
          />
      </a>
    );
  }

}

export default Icon;