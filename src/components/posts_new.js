/**
 * Created by nicholas on 5/2/17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }


    render() {
        return (
          <form>
              <Field
                label="Title"
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
          </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> {title: 'asdf', categories: 'blog', content: 'not too much'}
    const errors ={};

    // Validate the inputs form 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properites, reduc form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);