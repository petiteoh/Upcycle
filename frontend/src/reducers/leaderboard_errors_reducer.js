import {
  RECEIVE_LEADERBOARD,
  RECEIVE_LEADERBOARD_ERRORS,
} from "../actions/leaderboard_actions";

const _emptyLeaderboardErrors = [];

const LeaderboardErrorsReducer = (state = _emptyLeaderboardErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEADERBOARD:
      return _emptyLeaderboardErrors;
    case RECEIVE_LEADERBOARD_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default LeaderboardErrorsReducer;
