import React, { Component } from "react";
import "../../css/about/about.css";

export default class About extends Component {

  socialIcon(type) {
    return <img id="social-image" className="pulsate-bck" src={process.env.PUBLIC_URL + `/assets/images/${type}-64.png`} alt={`${type} profile link`} />;
  }

  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">The Team</h1>
        <ul className="team-members">
          <li className="member">
            <img id="Artem"  src="https://medio-app-seed.s3.amazonaws.com/artemprofileimage.png" alt="Artem's Profile Image"/>
            <div className="member-info">
              <h3>Artem</h3>
              <h4 id="Artem-title">Flex Developer</h4>
              <div className="social-links">
                <a className="" href="https://github.com/ArtemSilka"> {this.socialIcon("github")} </a>
                <a className="" href="https://www.linkedin.com/in/artemsilka/"> {this.socialIcon("linkedin")} </a>
                <a className="" href="https://angel.co/u/artem-silka"> {this.socialIcon("angellist")} </a>
              </div>
            </div>
          </li>
          <li className="member">
            <img id="Cade"  src="https://medio-app-seed.s3.amazonaws.com/cade_prof_pic.jpg" alt="Cade's Profile Image"/>
            <div className="member-info">
              <h3>Cade</h3>
              <h4 id="Cade-title">Back-end Developer</h4>
              <div className="social-links">
                <a className="" href="https://github.com/cschreger"> {this.socialIcon("github")} </a>
                <a className="" href="https://www.linkedin.com/in/cade-schreger-01048aab/"> {this.socialIcon("linkedin")} </a>
                <a className="" href="https://angel.co/u/cade-schreger"> {this.socialIcon("angellist")} </a>
              </div>
            </div>
          </li>
          <li className="member">
            <img id="Nikki" src="https://medio-app-seed.s3.amazonaws.com/nikki-profile-img.jpg" alt="Nikki's Profile Image"/>
            <div className="member-info">
              <h3>Nikki</h3>
              <h4 id="Nikki-title">Team Lead</h4>
              <div className="social-links">
                <a className="" href="https://github.com/petiteoh"> {this.socialIcon("github")} </a>
                <a className="" href="https://www.linkedin.com/in/nikkiteoh/"> {this.socialIcon("linkedin")} </a>
                <a className="" href="https://angel.co/nikki-teoh"> {this.socialIcon("angellist")} </a>
              </div>
            </div>
          </li>
          <li className="member">
            <img id="Victor" src="https://medio-app-seed.s3.amazonaws.com/victorcrispinprofile.jpg" alt="Victor's Profile Image"/>
            <div className="member-info">
              <h3>Victor</h3>
              <h4 id="Cade-title">Font-end Developer</h4>
              <div className="social-links">
                <a className="" href="https://github.com/vcjr"> {this.socialIcon("github")} </a>
                <a className="" href="https://www.linkedin.com/in/victorcrispin/"> {this.socialIcon("linkedin")} </a>
                <a className="" href="https://angel.co/u/victor-crispin"> {this.socialIcon("angellist")} </a>
              </div>
            </div>
          </li>
        </ul>
      <div className="team-hats"></div>
      </div>
    );
  }
}
