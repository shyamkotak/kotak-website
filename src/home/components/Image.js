import React from 'react';

function Image(props){

  const styles = {width: props.width, height:props.height, display:'inline-block'}

  return (
	  <div className="inner_div">
	    <img style={styles} src={props.src} alt={props.alt}></img>
	  </div>
  );

}

export default Image;