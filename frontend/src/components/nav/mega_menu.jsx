import React, { useState } from 'react';
import NavItem from './nav_item';

const MegaMenu = props => {
  cosnt [open, setOpen] = useState(false);

  return (
    <div className="nav-mega-menu">
      <NavItem name={"Home"} />
      <NavItem name={"About"} />
      <NavItem name={"UpCycles"} />
    </div>
  );
}

export default MegaMenu;