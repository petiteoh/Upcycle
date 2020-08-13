import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { name, link } = props;

  return(
    <li className="nav-menu-link-list-item">
      <h3><Link to={link}>{name}</Link></h3>
    </li>
  );
};

export default NavItem;