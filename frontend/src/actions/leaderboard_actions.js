import { getLeaderboard } from '../util/user_api_util';

export const RECEIVE_LEADERBOARD = "RECEIVE_LEADERBOARD";
export const RECEIVE_LEADERBOARD_ERRORS = "RECEIVE_LEADERBOARD_ERRORS";

export const receiveLeaderboard = (leaderboard) => ({
  type: RECEIVE_LEADERBOARD,
  leaderboard
});

export const receiveLeaderboardErrors = (errors) => ({
  type: RECEIVE_LEADERBOARD_ERRORS,
  errors
});

export const fetchLeaderboard = () => dispatch => {
  getLeaderboard()
    .then(leaderboard => dispatch(receiveLeaderboard(leaderboard)))
    .catch(err => dispatch(receiveLeaderboardErrors(err.response.data)));
};