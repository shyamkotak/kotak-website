import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default Icon;