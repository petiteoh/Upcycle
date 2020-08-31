import React, { Component } from "react";
import "../../css/about/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>The Team</h1>
        <ul className="team-members">
          <li className="member">
            <img id="Nikki" src="https://medio-app-seed.s3.amazonaws.com/nikki-profile-img.jpg" alt="Nikki's Profile Image"/>
            <div className="member-info">
              <h3>Nikki</h3>
              <a className="" href="https://github.com/petiteoh">Github</a>
            </div>
          </li>
          <li className="member">
            <img id="Artem"  src="https://medio-app-seed.s3.amazonaws.com/artemprofileimage.png" alt="Artem's Profile Image"/>
            <div className="member-info">
              <h3>Artem</h3>
              <a className="" href="https://github.com/ArtemSilka">Github</a>
            </div>
          </li>
          <li className="member">
            <img id="Cade"  src="https://medio-app-seed.s3.amazonaws.com/cade_prof_pic.jpg" alt="Cade's Profile Image"/>
            <div className="member-info">
              <h3>Cade</h3>
              <a className="" href="https://github.com/cschreger">Github</a>
            </div>
          </li>
          <li className="member">
            <img id="Victor" src="https://media-exp1.licdn.com/dms/image/C5603AQGQTyO7GAzSuQ/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=39y69M5QzYtoiAgmnz7BmYaZIt2xzqL6NbCLwHTBpN8" alt="Victor's Profile Image"/>
            <div className="member-info">
              <h3>Victor</h3>
              <a className="" href="">Github</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}