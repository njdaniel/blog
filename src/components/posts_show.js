/**
 * Created by nicholas on 5/3/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render() {
        posts[this.props.match.params.id]; // the post we want to show
        return (
            <div>
                Posts Show!
            </div>
        );
    };
}

function mapStateToProps({ posts }) {
    return {posts};
}

export default connect(null, fetchPost)(PostsShow);