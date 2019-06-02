import React, { Component } from 'react';
import styles from './Post.module.css'

class Post extends Component {

	constructor(props) {
		super();

		this.title = props.title
		this.body = props.body

	}

	render() {
		return (
			<div className={styles.post}>
				<h3 className={styles.title}>{this.title}</h3>
				<p className={styles.date}>Feb 1st, 2019</p>
				<hr></hr>
				<p>{this.body}</p>
			</div>
		);
	}

}

export default Post;