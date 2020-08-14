import React, { Component } from "react";
import "../../css/about/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>The Team</h1>
        <ul className="team-members">
          <li className="member">Nikki</li>
          <li className="member">Artem</li>
          <li className="member">Cade</li>
          <li className="member">Victor</li>
        </ul>
      </div>
    )
  }
}
