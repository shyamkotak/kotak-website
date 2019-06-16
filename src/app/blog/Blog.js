import React, { Component } from 'react';

import Post from './Post'
import styles from './Blog.css'
import Container from '@material-ui/core/Container';

import post1 from './posts/post1.md';
import post2 from './posts/post2.md';
var posts = [post1, post2]

class Blog extends Component {

  constructor(props) {
    super(props)

    this.state = { data: [] }
  }

  async componentDidMount() {
    var postContents = []
    await Promise.all(posts.map(async (post) => {
      await fetch(post).then(async (response) => {
        await response.text().then((text) => {
          postContents.unshift(text)
        })
      })
    }))

    this.setState({data : postContents})
  }

  render() {
    const postsToRender = this.state.data.map((post, index) =>
      <Post key={index} post={post}/>
    )

    return (
      <div className={styles.blog}>
        <Container maxWidth="md">
          <ul>{postsToRender}</ul>
        </Container>
       </div>
    );
  }
}

export default Blog;