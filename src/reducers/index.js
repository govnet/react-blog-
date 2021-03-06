import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  events: PostsReducer,
    form: formReducer
});

export default rootReducer;
