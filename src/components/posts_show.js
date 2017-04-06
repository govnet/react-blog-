/**
 * Created by chris on 30/03/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPostDetail } from '../actions/index';



class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPostDetail(this.props.params.id);
    }

    render() {
        const {post} =this.props;

        if (!this.props.post) {
            return <div> Loading...</div>;
        }
        return (
            <div>
            <h3> {post.title} </h3>
            <h4> Categories: {post.categories} </h4>
                <p> {post.content} </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post}
}
export default connect(mapStateToProps, { fetchPostDetail })(PostsShow);
