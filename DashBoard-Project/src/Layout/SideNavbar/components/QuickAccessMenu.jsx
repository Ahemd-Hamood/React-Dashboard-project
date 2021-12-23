import React from 'react'
import { Link } from 'react-router-dom';

import { AttachMoney, BarChart, PersonOutline, Storefront } from '@material-ui/icons';

export default function QuickAccessMenu() {
  return (
    <div className="sideNavbar-menu">
      <h3 className='menu-title' > Quick Access </h3>

      <ul className="sideNavbarList">
        <Link to="/users" className='link'>
          <li className="sideNavbarListItem">
            <PersonOutline className="sideNavbarIcon" /> Users
          </li>
        </Link>

        <Link to="/products" className='link'>
          <li className="sideNavbarListItem">
            <Storefront className="sideNavbarIcon" /> Products
          </li>
        </Link>

        <li className="sideNavbarListItem">
          <AttachMoney className="sideNavbarIcon" /> Transactions
        </li>
        
        <li className="sideNavbarListItem">
          <BarChart className="sideNavbarIcon" /> Reports
        </li>
        
      </ul>
    </div>
  )
}
