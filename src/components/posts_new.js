import React from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends React.Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Go Back Home
          </Link>
        </div>
        <h3>PostsNew!</h3>
      </div>
    );
  }
}

export default PostsNew;
