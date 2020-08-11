import React from 'react';

const NavItem = (props) => {
    return(
      <li className="nav-menu-link-list-item">
        <p>{props.name}</p>
      </li>
    );
};

export default NavItem;