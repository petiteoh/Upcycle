import React, { Component } from "react";
import LeaderboardItem from "./leaderboard_item";
import "../../css/leaderboard/leaderboard.css";

export default class Leaderboard extends Component {
  render() {
    return (
      <>
        <div className="leaderboard-rankings">
          <ul className="leaderboard-items">
            <div className="leaderboard-banner">
              <img src="https://medio-app-seed.s3.amazonaws.com/leaderboard.png" width="200" alt=""/>
              <h1>Leaderboard</h1>
            </div>
            {
              // Create a this.props.leaders and map through each one
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
  }
}
