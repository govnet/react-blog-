
/**
 * Created by chris on 30/03/17.
 */
import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { fetchEventList } from '../actions/index';

class EventsIndex extends Component {
    componentWillMount() {
        this.props.fetchEventList();
    }
    renderEvents() {
        return this.props.events.map((event) => {
            return (
                <tr key={event.code}>
                    <td >
                        { event.name }
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

    render() {
        return (
            <div>
                <h2> Events List</h2>
                <table className="table">
                    <thead className="thead-inverse">
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Delegates
                        </th>
                        <th>
                            Division
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderEvents()}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { events: state.events.all}
}

export default connect(mapStateToProps, { fetchEventList })(EventsIndex);


/** the fetchPosts: fetchPosts part is a shortcut for the mapDispatchtoProps function.
 function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts}, dispatch);
}

 That can then be condensed down to just be fetchPosts
 */