import React, { Component } from "react";
import NavItem from './nav_item';

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <h3>Menu</h3>
          <ul className="nav-menu-links">
            <NavItem name={"Home"} />
            <NavItem name={"About"} />
            <NavItem name={"UpCycles"} />
          </ul>
        </nav>
        <div className="header-logo"> <a href="/"><h1>Upcycle</h1></a></div>
      </>
    );
  }
}
