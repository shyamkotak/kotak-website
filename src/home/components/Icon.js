import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props){

  const styles_box = {'color':'black'}
  const styles_icon = {'color':props.color}

  return (
    <a className="fa-stack icon" href={props.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon style={styles_box} className="fa-stack-2x" icon={["far", "circle"]}/>
        <FontAwesomeIcon style={styles_icon} className="fa-stack-1x" icon={[props.iclass, props.icon]}/>
    </a>
  );

}

export default Icon;