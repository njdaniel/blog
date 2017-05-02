/**
 * Created by nicholas on 5/2/17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
          <div>
              PostsNew!
          </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);