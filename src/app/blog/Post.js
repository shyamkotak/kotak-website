import React, { Component } from 'react';
import styles from './Post.module.css'

import Paper from '@material-ui/core/Paper';
import {markdown} from 'markdown';

class Post extends Component {

	constructor(props) {
		super();
		this.title = props.title
		this.body = props.body
	}

	render() {
		return (
			<Paper>
				<h1>{this.title}</h1>
				<hr></hr>
				<p>{this.body}</p>
			</Paper>
		);
	}

}

export default Post;