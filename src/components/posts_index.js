
/**
 * Created by chris on 30/03/17.
 */
import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">
                Add a post.
                </Link>
                </div>

                List of Blog Posts
            </div>
        );
    }
}



export default connect(null, {fetchPosts})(PostsIndex);


/** the fetchPosts: fetchPosts part is a shortcut for the mapDispatchtoProps function.
 function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts}, dispatch);
}

 That can then be condensed down to just be fetchPosts
 */