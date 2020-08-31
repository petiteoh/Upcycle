import React, { Component } from 'react';

export default class Badge extends Component {
  render() {
    return (
      <div>
        <img src={`https://medio-app-seed.s3.amazonaws.com/ZeroHeroBadge${this.props.badge}.png`} alt={`Zero Hero Badge #${this.props.badge}`}/>
      </div>
    )
  }
}