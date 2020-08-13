import { RECEIVE_LEADERBOARD } from "../actions/leaderboard_actions";

const _emptyLeaderboard = [];

const LeaderboardReducer = (state = _emptyLeaderboard, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEADERBOARD:
      return action.leaderboard.data;
    default:
      return state;
  }
};

export default LeaderboardReducer;
