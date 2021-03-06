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

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.fetchUsers();
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: "demouser@demouser.com", password: "111111"})
    .then(this.props.history.push("/posts"))
  }

  render() {
    const demoLoginButton = () => {
      if (!this.props.isAuthenticated) {
        return (
          <Link className="demo-button" to="/login">
            <button
              className="demo-button-container"
              onClick={this.handleSubmit}
            >
              Demo Login
            </button>
          </Link>
        );
      }
    };

    const topPost = () => {
      if (this.state.topPost) {
        const { title, image, description, upcycle_ids } = this.state.topPost;
        return (
          <>
            <h1> <mark>Upcycled Project of The Week</mark></h1>
            <h2>{title}</h2>
            <div className="top-post-content">
              <img
                parallax
                data-rate="-0.5"
                src={image}
                width="700px"
                alt="top-post-image"
              />
              <div>
                <h3>
                  <Link to={`posts/user/${this.state.topPost.creator_id}`}>
                    {this.props.authors[this.state.topPost.creator_id]}
                  </Link>
                </h3>
                <span>{upcycle_ids.length} Upcycles</span>
                <p className="top-post-description">{description}</p>
              </div>
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
            <h1>F.A.Q.</h1>
            <div>
              <label className="faq-question">
                Q: Why did we create Upcycled?
              </label>
              <p>
                A: We realized that there wasn't a hub for people to share
                upcycled projects. Hence, Upcycled was born! With Upcycled you
                can showcase your projects to others in the upcycling community.
                Encouraging the reduction of global carbon footprint!
                {/* <span className="hero-point-span">♲</span> Hero Points while you at it!*/}
              </p>
            </div>
            <div>
              <label className="faq-question">
                Q: How do you gain Hero Points?
              </label>
              <p>A: Posting projects will earn each Upcycler 5 Hero Points.</p>
            </div>
            <div>
              <label className="faq-question">
                Q: Who is featured on "Upcycled Project of The Week"?
              </label>
              <p>
                A: The post with the most Upcycles in week will be featured on
                there for a full week starting Monday.
              </p>
            </div>
            <div>
              <label className="faq-question">
                Q: How do you get on the Leaderboard?
              </label>
              <p>
                A: The top 5 Upcyclers with the most Hero Points will be on the
                leaderboard along with the badges they earned.
              </p>
            </div>
          </section>
          <section className="highlight-section">{topPost()}</section>
          <section className="leaderboard-section">{<Leaderboard />}</section>
        </section>
      </>
    );
  }
};
