import React, { Component } from "react";
import LeaderboardItem from "./leaderboard_item";
import "../../css/leaderboard/leaderboard.css";

export default class Leaderboard extends Component {
  constructor(props){
    super(props)

    this.state = this.props.leaderboard;
  }

  componentDidMount(){
    this.props.fetchLeaderboard();
  }

  componentDidUpdate(prevProps){
    if (prevProps.leaderboard !== this.props.leaderboard){
      debugger
      return this.setState(this.props.leaderboard);
    }
  }

  render() {
    // Check props and state after second reload
    debugger

    if (this.state.length > 0) {
      return (
        <>
        <div className="leaderboard-rankings">
          <ul className="leaderboard-items">
            <div className="leaderboard-banner">
              <img src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png" width="200" alt=""/>
              <h1>Leaderboard</h1>
            </div>
            {
              this.props.leaders.map((user, i) => {
                return (
                  <li key={i}>
                    <LeaderboardItem user={user} rank={i + 1} />
                  </li>
                );
              })
            }
          </ul>
        </div>
      </>
      );
    } else {
      return (
        <p>No Leaderboard</p>
      );
    }
  }
}
