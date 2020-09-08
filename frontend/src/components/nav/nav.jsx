import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import MegaMenu from "./mega_menu";
import '../../css/nav/nav.css';
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAuthenticated){
      if (prevProps.user.hero_points !== this.props.user.hero_points){
        this.forceUpdate();
      }
    }
  }

  MegaMenu(props) {
    const [open, setOpen] = useState(false);

    const profileDash = () => {

      if(props.isAuthenticated){
        const profileImage = props.user.photo || "https://medio-app-seed.s3.amazonaws.com/3niwMHz8HACEcENzLnva4QtZ.jpg";
// debugger
        return (
          <>
            <div className="profile-dash">
              <Link to={`/posts/user/${props.user.id}`}>
              <img src={profileImage} alt=""/>
              </Link>
              <p>{`Hi, ${props.user.handle}`}</p>
              <p><span className="dash-points"> <span className="dash-icon">♲</span>{`${props.user.hero_points}`}</span> Hero Points</p>
              <Link to="/create-post">Create Post</Link>
              <Link to="/" onClick={props.logout}>Logout</Link>
            </div>
          </>
        );
      } else {
        return (
          <>
            <Link to="/login"><h3>Login</h3></Link>
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

  logoChange(e){

  }

  render() {
    return (
      <>
        <nav>
          <this.MegaMenu user={this.props.user} state={this.state} isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} 
          history={this.props.history}>
            <MegaMenu />
          </this.MegaMenu>
        </nav>
        <div className="header-logo">
          <Link to="/">
            <img
              className="header-logo-img"
              src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogo.png"
              height="100px"
              alt="Upcycled"
              onMouseOut={e => e.currentTarget.src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogo.png"}
              onMouseOver={e => e.currentTarget.src="https://medio-app-seed.s3.amazonaws.com/Upcycledlogohover1.png"}
            />
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(Nav);