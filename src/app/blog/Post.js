import React, { Component } from 'react';
import styles from './Post.css'

import Paper from '@material-ui/core/Paper';
const ReactMarkdown = require('react-markdown/with-html')

class Post extends Component {

	constructor(props) {
		super();
		this.post = props.post
	}

	componentWillReceiveProps(props) {
		this.post = props.post 
	}

	render() {
		return (
			<div>
				<Paper className={styles.markdown}>
					<ReactMarkdown source={this.post}/>
				</Paper>
			</div>
		);
	}

}

export default Post;