import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../splash.css";
import "../../css/splash/splash.css";
import Leaderboard from "../leaderboard/leaderboard_container";
import axios from "axios";

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

    this.state = {
      topPost: null,
    };
  }

  parallaxEffect(e) {
    // const target1 = document.querySelectorAll(".blur");
    const target = document.querySelectorAll(".parallax");

    let index = 0,
      length = target.length;

    for (index; index < length; index++) {
      let pos = window.pageYOffset * target[index].dataset.rate;

      target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    }

    // let scrolled = window.pageYOffset;
    // let blurRate = scrolled * 0.01;
    // let index2 = 0, length2 = target1.length;
    // target1.style.filter = `blur(${2 * blurRate}px)`;

    // for (index2; index2 < length2; index2++) {
    //   target1[index2].style.filter = `blur(${2 * blurRate}px)`;
    // }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.parallaxEffect);

    return axios.get(`/api/posts/top-post`).then((response) => {
      if (response.status === 200) {
        let topPost = response.data[0];
        return this.setState({ topPost: topPost });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxEffect);
  }

  render() {
    const demoLoginButton = () => {
      if (!this.props.isAuthenticated) {
        return (
          <Link className="demo-button" to="/login">
            <button
              className="demo-button-container"
              onClick={this.props.login}
            >
              Demo Login
            </button>
          </Link>
        );
      }
    };

    const topPost = () => {
      // debugger
      if (this.state.topPost) {
        const { title, image, description, upcycle_ids } = this.state.topPost;
        return (
          <>
            <h1>Upcycled Project of The Week</h1>
            <h2>{title}</h2>
            <h3>
              Zero Hero: Mr Green - <span>{upcycle_ids.length} Upcycles</span>
            </h3>
            <div className="top-post-content">
              <p className="top-post-description">{description}</p>
              <img
                parallax
                data-rate="-0.5"
                src={image}
                width="700px"
                alt="top-post-image"
              />
            </div>
          </>
        );
      } else {
        return "No Top Post";
      }
    };

    return (
      <>
        <section className="hero-parallax-container">
          <section className="main-header-section">
            <div className="img-container">
              <img
                className="parallax-img-1-before parallax blur"
                width="600px"
                src="https://medio-app-seed.s3.amazonaws.com/canbefore.png"
                data-rate="-0.4"
              />
              <img
                className="parallax-img-1-after parallax blur"
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
            <h1>Possibilities Are Endless</h1>
            <p>We are all guilty of throwing away items that could've been repurposed and given new life! Now with Upcycled you can showcase your projects to others in the upcycling community. While all at the same time helping reduce your overall carbon footprint and gaining ♲ Hero Points!</p>
            <p>ImagesImagesImagesImages</p>
          </section>
          <section className="highlight-section">{topPost()}</section>
          <section className="leaderboard-section">{<Leaderboard />}</section>
        </section>
      </>
    );
  }
}
