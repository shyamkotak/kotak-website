import React, { Component } from 'react';
import Icon from './Icon'

class IconList extends Component{
  render() {
    return (
      <div className="inner_div">
        <Icon iclass="fas" icon="envelope" link="mailto:me@shyamkotak.com" color="#000000"/>
        <Icon iclass="fab" icon="twitter" link="https://twitter.com/shyamkotak_" color="#1da1f2"/>
        <Icon iclass="fab" icon="github" link="https://github.com/shyamkotak" color="#333333"/>
        <Icon iclass="fab" icon="linkedin" link="https://www.linkedin.com/in/kotakshyam" color="#0077B5"/>
        <Icon iclass="far" icon="file-alt" link="Kotak_Resume.pdf" color="#000000"/>
      </div>
    )
  }
}

export default IconList;