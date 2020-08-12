import React, { Component } from "react";
import "../../splash.css";
import scrollSnapPolyfill from "css-scroll-snap-polyfill";

export const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

export const init = function(){
    let items = document.querySelectorAll('section');
    scrollSnapPolyfill()
}

export default class Splash extends Component {
  constructor(props) {
    super(props) 

    init();
  }
//   gra (min, max) {
//     return Math.random() * (max - min) + min;
// }
//   init(){
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++){
//         items[i].style.background = randomColor({luminosity: 'light'});
//     }
//     cssScrollSnapPolyfill()
// }
// init();

  render() {
    return (
      <>
        <section className="hero-parallax-container">
          <section className="main-header-section">
            <h1>Upcycling saves 100 million tons of carbon polution a year.</h1>
            <p>
              Our mission at Upcycled is to inspire the creative reuse of
              "waste." Let's heal our planet one upcycle at a time!
            </p>
            <p>Click here to explore!</p>
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
            <h1>Zero Hero Leaderboard</h1>
            <p>Nov 1, 2020</p>
            <p>Upcycling Community</p>
          </section>
        </section>
        {/* <div class="parallax-container">
          <div class="wrapper">
            <img
              class="background__image"
              src="https://img.pngio.com/recycling-symbol-computer-icons-upcycling-logo-others-png-clipart-upcycling-png-728_728.jpg"
            ></img>
          </div>
        </div> */}
      </>
    );
  }
}