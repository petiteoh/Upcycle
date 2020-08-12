import { combineReducers } from 'redux';
import session from "./session_reducer";
import errors from "./errors_reducer";
import posts from "./posts_reducer";
import leaderboard from './leaderboard_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    posts,
    leaderboard
});

export default RootReducer;
