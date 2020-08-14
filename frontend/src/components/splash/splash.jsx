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

  parallaxEffect(e){
    const target1 = document.querySelector(".img-container");
      const target = document.querySelectorAll(".parallax");
      const highlights = document.querySelectorAll(".highlight");

      let scrolled = window.pageYOffset;
      let blurRate = scrolled * 0.01;

      target1.style.filter = `blur(${2 * blurRate}px)`;

      let index = 0, length = target.length;

      for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
      }

      for (let i = 0; i < highlights.length; i++) {
        highlights[i].style.backgroundColor = `#9cefc999`;
      }
  }
  componentDidMount(){
    document.addEventListener("scroll", this.parallaxEffect);
    // document.addEventListener("scroll", (e) => {
    //   const target1 = document.querySelector(".img-container");
    //   const target = document.querySelectorAll(".parallax");
    //   const highlights = document.querySelectorAll(".highlight");

    //   let scrolled = window.pageYOffset;
    //   let blurRate = scrolled * 0.01;

    //   target1.style.filter = `blur(${2 * blurRate}px)`;

    //   let index = 0, length = target.length;

    //   for (index; index < length; index++) {
    //     let pos = window.pageYOffset * target[index].dataset.rate;

    //     target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    //   }

    //   for (let i = 0; i < highlights.length; i++) {
    //     highlights[i].style.backgroundColor = `#9cefc999`;
    //   }
    // });
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.parallaxEffect);
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
                className="parallax-img-1-before parallax"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/canbefore.png"
                data-rate="-0.2"
              />
              <img
                className="parallax-img-1-after parallax"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/canafter.png"
                data-rate="-0.8"
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
                className="parallax-img-2-before parallax"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/corkbefore.png"
                data-rate="-0.3"
              />
              <img
                className="parallax-img-2-after parallax"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/corkafter.png"
                data-rate="-0.6"
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
