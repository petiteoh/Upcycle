import React from 'react';

const NavItem = (props) => {
    return(
      <li className="nav-menu-link-list-item">
        <h3>{props.name}</h3>
      </li>
    );
};

export default NavItem;