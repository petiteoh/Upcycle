import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../splash.css";
import Leaderboard from '../leaderboard/leaderboard_container';

export const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

export const init = function(){
    let items = document.querySelectorAll('section');
}

export default class Splash extends Component {
  constructor(props) {
    super(props) 

    init();
  }

  render() {
    const demoLoginButton = () => {
      if (!this.props.isAuthenticated) {
        return (
          <button className="demo-button-container" onClick={this.props.login}>
            <Link className="demo-button" to="/login">
              Demo Login
            </Link>
          </button>
        );
      }
    };

    return (
      <>
        <section className="hero-parallax-container">
          <section className="main-header-section">
            <div className="main-header-content-container">
              <h1>Upcycling saves 100 million tons of carbon polution a year.</h1>
              <p>
                Our mission at Upcycled is to inspire the creative reuse of
                "waste." Let's heal our planet one upcycle at a time!
              </p>
              <p>{demoLoginButton()}</p>
            </div>
          </section>
          <section className="infographic-section">
            <h1>Infographic</h1>
            <p>StatsStatsStatsStats</p>
            <p>ImagesImagesImagesImages</p>
          </section>
          <section className="highlight-section">
            <h1>Upcycled Project of The Week</h1>
            <p>Zero Hero: Mr Green</p>
            <p>Upcycling Community</p>
          </section>
          <section className="leaderboard-section">
            { <Leaderboard /> }
          </section>
        </section>
      </>
    );
  }
}