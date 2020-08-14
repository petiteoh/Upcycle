import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../splash.css";
import "../../css/splash/splash.css";
import Leaderboard from "../leaderboard/leaderboard_container";

export const gra = function (min, max) {
  return Math.random() * (max - min) + min;
};

export const init = function () {
  let items = document.querySelectorAll("section");
};

export default class Splash extends Component {
  constructor(props) {
    super(props);

    init();
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => {
      const target = document.querySelector(".img-container");
      const target1 = document.querySelector(".img-container2");
      const target2 = document.querySelectorAll(".highlight");

      // console.log(target.style);
      let scrolled = window.pageYOffset;
      let rate = scrolled * -0.5;
      let blurRate = scrolled * 0.01;

      target.style.filter = `blur(${2 * blurRate}px)`;
      target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      target1.style.transform = `translate3d(0px, ${rate}px, 0px)`;

      let index = 0,
        length = target2.length;

      for (index; index < length; index++) {
        target2[index].style.backgroundColor = `#9cefc999`;
      }
    });
  }

  componentWillUnmount() {
    // document.removeEventListener("scroll");
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
            <div className="img-container">
              <img
                className="parallax-img-1-before"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/canbefore.png"
              />
              <img
                className="parallax-img-1-after"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/canafter.png"
              />
            </div>
            <div className="main-header-content-container">
              <h1 className="highlight">
                Upcycling Reduces Your Carbon Polution
              </h1>
              <h3 className="highlight">
                Our mission at Upcycled is to inspire the creative reuse of
                "waste." Let's heal our planet one upcycle at a time!
              </h3>
              <p>{demoLoginButton()}</p>
            </div>
          </section>
          <section className="infographic-section">
            <div className="img-container2">
              <img
                className="parallax-img-2-before"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/corkbefore.png"
              />
              <img
                className="parallax-img-2-after"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/corkafter.png"
              />
            </div>
            <h1>Posibilities Are Endless</h1>
            <p>StatsStatsStatsStats</p>
            <p>ImagesImagesImagesImages</p>
          </section>
          <section className="highlight-section">
            <h1>Upcycled Project of The Week</h1>
            <p>Zero Hero: Mr Green</p>
            <p>Upcycling Community</p>
          </section>
          <section className="leaderboard-section">{<Leaderboard />}</section>
        </section>
      </>
    );
  }
}
