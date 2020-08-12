import React, { Component } from "react";
import LeaderboardItem from "./leaderboard_item";
import "../../css/leaderboard/leaderboard.css";

export default class Leaderboard extends Component {
  constructor(props){
    super(props)

    this.state = [];
  }

  componentDidMount(){
    this.props.fetchLeaderboard();
  }

  componentWillReceiveProps(newState){
    this.setState(newState)
  }
  // componentDidUpdate(prevProps){
  //   if (prevProps.Leaderboard !== this.props.Leaderboard){
  //     debugger
  //     return this.setState(this.props.Leaderboard);
  //   }
  // }

  render() {
    // Check props and state after second reload
    debugger
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
              this.state.map((user, i) => {
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
