/**
 * Created by chris on 30/03/17.
 */
import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPostDetail, deletePost } from '../actions/index';



class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPostDetail(this.props.params.id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => { this.context.router.push("/"); });
    }
    render() {
        const {post} =this.props;

        if (!this.props.post) {
            return <div> Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}> Delete </button>
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
export default connect(mapStateToProps, { fetchPostDetail, deletePost })(PostsShow);
