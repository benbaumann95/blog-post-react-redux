import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends React.Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <div className="flex">
          <Link className="btn btn-danger right" to="/">
            Go Back
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title (at least 3 characters)';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));

/* <Link className="btn btn-primary" to="/">
  Go Back Home
</Link>; */

// renderField(field) {
//   const { meta } = field;
//   const className = `form-group ${
//     field.meta.touched && field.meta.error ? field.meta.error : ''
//   }`;
//
//   return (
//     <div className="form-group has-danger">
//       <label>{field.label}</label>
//       <input className="form-control" type="text" {...field.input} />
//       <div className="text-help">
//         {field.meta.touched ? field.meta.error : ''}
//       </div>
//     </div>
//   );
// }
