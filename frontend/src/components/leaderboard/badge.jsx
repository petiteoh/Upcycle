import React, { Component } from 'react';
import "../../css/leaderboard/badge.css";
export default class Badge extends Component {

  badgeInfo(badgeNum){
    switch (badgeNum) {
      case 1:
        return `Obtained 100 Hero Points`;
      case 2:
        return `Achieved Rank of Carbon Master`;
      case 3:
        return `Obtained 500 Hero Points`;
      case 4:
        return `Created Upcycled Posts`;
      case 5:
        return `Zero Hero Leaderboard Status`;
      case 6:
        return `Obtained 1000 Hero Points`;
    
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