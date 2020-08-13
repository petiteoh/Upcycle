import React from "react";
import NavItem from "./nav_item";

const MegaMenu = (props) => {
  return (
    <div className="nav-mega-menu">
      <NavItem name={"Home"} link={"/"}/>
      <NavItem name={"About"} link={"/about"} />
      <NavItem name={"Upcycles"} link={"/posts"} />
      <NavItem name={"Leaderboar"} link={"/leaderboard"} />
    </div>
  );
};

export default MegaMenu;
