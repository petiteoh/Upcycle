import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Badge from './badge';

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
          <Link to={`posts/user/${this.props.user._id}`}>
            <img src={profileImage} alt={`${this.props.user.handle}'s profile image`}/>
            <p className="leader-info-handle">{this.props.user.handle}</p>
          </Link>
          <p className="leader-info-points"> <span className='dash-points'><span className="dash-icon">♲</span>{this.props.user.hero_points} Hero Points</span></p>
          <ul className="badge-list">
            {
              this.state.badges.map((badge, i) => {
                return (
                  <li key={i}>
                    <Badge badge={badge} />
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