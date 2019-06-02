import React, { Component } from 'react';

import Post from './components/Post'
import styles from './Blog.module.css'

class Blog extends Component {
  render() {
    return (
    	<div className={styles.blog}>
      	<Post title="Introduction to Shyam Kotak" body="Hello World!" /> 
      	<Post title="Test2" body="What it do?" /> 
      </div>
    );
  }
}

export default Blog;