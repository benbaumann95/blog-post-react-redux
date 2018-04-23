import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // posts[this.props.match.params.id];

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <div className="flex">
          <Link className="btn btn-success right" to="/">
            Go Back
          </Link>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  // return { posts };
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
