import React, { Component } from 'react';

export default class LeaderboardItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      badges: this.props.user.badge_ids
    };
  }
  render() {
    const profileImage = this.props.user.photo || "https://medio-app-seed.s3.amazonaws.com/3niwMHz8HACEcENzLnva4QtZ.jpg";
    return (
      <div className="leaderboard-item-user">
        <p className={`rank leader-rank-${this.props.rank}`}>{this.props.rank}</p>
        <div className="leader-info">
          <img src={profileImage} alt=""/>
          <p className="leader-info-handle">{this.props.user.handle}</p>
          <p className="leader-info-points"> <span className='dash-points'><span className="dash-icon">♲</span>{this.props.user.hero_points} Hero Points</span></p>
          <ul className="badge-list">
            {
              this.state.badges.map((badge, i) => {
                return (
                  <li key={i}>
                    <img src={`https://medio-app-seed.s3.amazonaws.com/ZeroHeroBadge${badge}.png`} alt=""/>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}