import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import PostErrorsReducer from "./post_errors_reducer";
import LeaderboardErrorsReducer from './leaderboard_errors_reducer';
import CategoryErrorsReducer from './category_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  postErrors: PostErrorsReducer,
  leaderboardErrors: LeaderboardErrorsReducer,
  categoriesErrors: CategoryErrorsReducer
});
