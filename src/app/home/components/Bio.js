import React from 'react';

function Bio(props){
	return (
	  <div className="inner_div">
	    <h2>{props.head}</h2>
	    <h3>{props.subhead}</h3>
	  </div>
	);
}

export default Bio;