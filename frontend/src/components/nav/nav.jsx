import React, { Component, useState } from "react";
import MegaMenu from './mega_menu';

export default class Nav extends Component {

  MegaMenu(props) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <ul className="nav-menu-links">  
          <h3 onClick={() => setOpen(!open)}>Menu</h3>
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
        <div className="header-logo"> <a href="/"><h1>Upcycle</h1></a></div>
      </>
    );
  }
}
