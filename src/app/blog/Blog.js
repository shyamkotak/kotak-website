import React, { Component } from 'react';

import Post from './Post'
import styles from './Blog.module.css'
import Container from '@material-ui/core/Container';

class Blog extends Component {
  render() {
    return (
    	<div className={styles.blog}>
	    	<Container maxWidth="md" >
	      	<Post title="test123" body="hmmm this is interesting"/> 
	      	<Post title="test123" body="hmmm this is interesting"/>
	      </Container>
	     </div>
    );
  }
}

export default Blog;