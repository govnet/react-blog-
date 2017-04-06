/**
 * Created by chris on 01/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
/** Nearly Identical to the connect function from react redux */
import {createPost} from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    //defining an object ont he POstsNew class - PostsNew.contextTypes - react interprets this whenever PostsNew is
    //instanciated - react will check all of the component's parents until it finds the parent that contains something called
    //router (in this case).

    onSubmit(props) {
        // props here isn't this.props (at component level), but rather just from the form, where it's called.

        this.props.createPost(props)
            .then(() => {
            //blogpost has been created, navigate the user to the index.
            // We navigate by calling this.context.router.push with the new path to navigate to
                this.context.router.push('/')
            })
    }
    render () {
        const { fields: {title, categories, content }, handleSubmit } = this.props;

        // equivalent to e.g const title = this.props.fields.title;
        return (

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3> Create New Post </h3>


                <div className={`form-group ${title.touched && title.invalid ? 'has-danger': '' }`}>
                <label> Title </label>
                <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>


                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': '' }`}>
                    <label> Categories </label>
                    <input type="text" className="form-control"  {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>


                <div className={`form-group ${content.touched && content.invalid ? 'has-danger': '' }`}>
                    <label> Content </label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary"> Submit </button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>

            </form>
        );
    }
}


function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }
    return errors;
}
//return an object from the validate function; if the object has a key that matches one of the fields passed,
// and that key has an object/string/truthy value whatever tied to it, ReduxForm assumes the form is not valid, and adds them to the
// field configuration object above.

export default reduxForm({
    form: 'PostsNewForm,', //doesn't have to match the PostsNew below, just some unique token
    fields: ['title', 'categories', 'content'],
    validate // the array of fields that tells ReduxForm what to create and what it needs config on
}, null, { createPost })(PostsNew);


//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

/**user types something in, gets recorded on application state, along the lines of -
state === {
    form : {
        PostsNewForm: {
            title: '...',
            categories: '...',
            content: '...',
        }
    }
}

 */