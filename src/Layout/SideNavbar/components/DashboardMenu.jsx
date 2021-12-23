import React from 'react'
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Assessment } from '@material-ui/icons';

export default function DashboardMenu() {
  return (
    <div className="sideNavbar-menu">
      <h3 className='menu-title' > Dashboard </h3>

      <ul className="sideNavbarList">
        <Link to="/" className='link'>
          <li className="sideNavbarListItem active">
            <Home className="sideNavbarIcon" /> Home
          </li>
        </Link>
        <li className="sideNavbarListItem">
          <Assessment className="sideNavbarIcon" /> Analysis
        </li>
        <li className="sideNavbarListItem">
          <TrendingUp className="sideNavbarIcon" /> Sales
        </li>
      </ul>
    </div>
  )
}
