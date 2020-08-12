import { connect } from "react-redux";
import Leaderboard from "./leaderboard";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  //  Here add the fetchleaders from the backend
  const exampleLeaders = [
    {
      handle: "ChocolateVynl",
      heroPoints: 5034,
      badges: [1, 2, 5, 7],
    },
    {
      handle: "PineappleSteel",
      heroPoints: 4489,
      badges: [2, 5, 7],
    },
    {
      handle: "SugarplumBass",
      heroPoints: 2540,
      badges: [1, 8, 7],
    },
    {
      handle: "LightningMango",
      heroPoints: 2262,
      badges: [2, 9],
    },
    {
      handle: "RaspberryTango",
      heroPoints: 2031,
      badges: [2, 3],
    },
  ];

  return {
    leaders: exampleLeaders,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
