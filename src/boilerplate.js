/**
 * Created by chris on 30/03/17.
 */
import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
/**
 * Created by chris on 06/04/17.
 */

class PostsShow extends Component {
    render() {
        return <div> Stuff here.</div>;
    }
}

export default PostsShow;


renderEvents() {
    return this.props.events.map((event) => {
        return (
            <tr key={event.confcode}>
                <td >
                    { event.name }
                </td>
                <td >
                    { event.confcode}
                </td>
                <td >
                    { event.date }
                </td>
                <td >
                    { event.delegates}
                </td>
                <td >
                    { event.division}
                </td>


            </tr>

        );
    })
}
