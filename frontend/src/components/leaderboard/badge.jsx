import React, { Component } from 'react';
import "../../css/leaderboard/badge.css";
export default class Badge extends Component {

  badgeInfo(badgeNum){
    switch (badgeNum) {
      case 1:
        return `This is badge #${badgeNum}`;
      case 2:
        return `This is badge #${badgeNum}`;
      case 3:
        return `This is badge #${badgeNum}`;
      case 4:
        return `This is badge #${badgeNum}`;
      case 5:
        return `This is badge #${badgeNum}`;
      case 6:
        return `This is badge #${badgeNum}`;
    
      default:
        return "This Badge Number Doesn't Exist!";
    }
  }

  render() {
    return (
      <div className="badge">
        <div className="badge-tooltip">
          <img src={`https://medio-app-seed.s3.amazonaws.com/ZeroHeroBadge${this.props.badge}.png`} alt={`Zero Hero Badge #${this.props.badge}`}/>
          <span className="badge-tooltip-text">{this.badgeInfo(this.props.badge)}</span>
        </div>
      </div>
    )
  }
}