import React from "react";
import NavItem from "./nav_item";

const MegaMenu = (props) => {
  return (
    <div className="nav-mega-menu">
      <NavItem name={"Home"} />
      <NavItem name={"About"} />
      <NavItem name={"UpCycles"} />
    </div>
  );
};

export default MegaMenu;
