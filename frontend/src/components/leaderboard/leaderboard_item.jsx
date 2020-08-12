import React, { Component } from 'react';

export default class LeaderboardItem extends Component {
  render() {
    // debugger
    return (
      <div className="leaderboard-item-user">
        <p className={`rank leader-rank-${this.props.rank}`}>{this.props.rank}</p>
        <div className="leader-info">
          <img src="https://medio-app-seed.s3.amazonaws.com/3niwMHz8HACEcENzLnva4QtZ.jpg" alt=""/>
          <p className="leader-info-handle">{this.props.user.handle}</p>
          <p className="leader-info-points"> <span className='dash-points'><span className="dash-icon">♲</span>{this.props.user.heroPoints} Hero Points</span></p>
          <p>badges</p>
        </div>
      </div>
    )
  }
}