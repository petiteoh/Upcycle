import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega_menu";

export default class Nav extends Component {
  MegaMenu(props) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <ul className="nav-menu-links">
          <Link to="/login"><h3>Log In</h3></Link>
          <Link to="/signup"><h3>Sign Up</h3></Link>
          <h3 className="menu-active-link" onClick={() => setOpen(!open)}>Menu</h3>
          {open && props.children}
        </ul>
      </>
    );
  }

  render() {
    return (
      <>
        <nav>
          <this.MegaMenu>
            <MegaMenu />
          </this.MegaMenu>
        </nav>
        <div className="header-logo">
          {" "}
          <a href="/">
            <img
              className="header-logo-img"
              src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogo.png"
              height="100px"
              alt="Upcycled"
            />
          </a>
        </div>
      </>
    );
  }
}
