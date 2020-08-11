import React, { Component } from "react";

export default class Splash extends Component {
  render() {
    return (
      <>
        <section className="hero parallax-container">
          <div className="top-section">
            <h1>Upcycling saves 100 million tons of carbon populution a year.</h1>
            <p>Nov 1, 2020</p>
            <p>Upcycling Community</p>
          </div>
        </section>
        <div class="parallax-container">
          <div class="wrapper">
            <img class="background__image" src="https://img.pngio.com/recycling-symbol-computer-icons-upcycling-logo-others-png-clipart-upcycling-png-728_728.jpg"></img>
          </div>
        </div>
      </>
    );
  }
}