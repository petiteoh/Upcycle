import { combineReducers } from 'redux';
import session from "./session_reducer";
import errors from "./errors_reducer";
import posts from "./posts_reducer";
import leaderboard from './leaderboard_reducer';
import categories from './categories_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    posts,
    leaderboard,
    categories

});

export default RootReducer;
