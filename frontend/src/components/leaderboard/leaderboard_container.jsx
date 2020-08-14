import { connect } from "react-redux";
import Leaderboard from "./leaderboard";
import { fetchLeaderboard } from '../../actions/leaderboard_actions';

const mapStateToProps = (state) => ({
  leaderboard: state.leaderboard
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
