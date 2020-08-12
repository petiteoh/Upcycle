import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega_menu";
import '../../css/nav/nav.css'
export default class Nav extends Component {
  constructor(props) {
    super(props);

  }

  MegaMenu(props) {
    const [open, setOpen] = useState(false);

    const profileDash = () => {
      if(props.isAuthenticated){
        return (
          <>
            <div className="profile-dash">
              <img src="https://medio-app-seed.s3.amazonaws.com/3niwMHz8HACEcENzLnva4QtZ.jpg" alt=""/>
              <p>{`Hi, ${props.user.handle}`}</p>
              <p> <span className="dash-points"> <span className="dash-icon">♲</span>2340</span> Hero Points</p>
              <Link to="/" onClick={props.logout}>Logout</Link>
            </div>
          </>
        );
      } else {
        return (
          <>
            <Link to="/login"><h3>Log In</h3></Link>
            <Link to="/signup"><h3>Sign Up</h3></Link>
          </>
        );  
      }
    }

    return (
        <ul className="nav-menu-links">
          { profileDash() }
          <h3 className="menu-active-link" onClick={() => setOpen(!open)}>Menu</h3>
          {open && props.children}
        </ul>
    );
  }

  render() {
    return (
      <>
        <nav>
          <this.MegaMenu user={this.props.user} isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} >
            <MegaMenu />
          </this.MegaMenu>
        </nav>
        <div className="header-logo">
          <a href="/">
            <img
              className="header-logo-img"
              src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogo.png"
              // src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogo.svg"
              height="100px"
              alt="Upcycled"
            />
          </a>
        </div>
      </>
    );
  }
}
