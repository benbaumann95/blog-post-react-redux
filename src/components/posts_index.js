import React from 'react';
import { connect } from 'react-redux';
import { FETCH_POSTS } from '../actions';

class PostsIndex extends React.Component {
  render() {
    return <div>Posts Index</div>;
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
