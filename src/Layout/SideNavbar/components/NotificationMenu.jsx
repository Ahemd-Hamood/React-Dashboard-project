import React from 'react'

import { Feedback, Mail, Message } from '@material-ui/icons';

export default function NotificationMenu() {
  return (
    <div className="sideNavbar-menu">
      <h3 className='menu-title' > Notifications </h3> 
      
      <ul className="sideNavbarList">
        <li className="sideNavbarListItem">
          <Mail className="sideNavbarIcon" /> Mails
        </li>
        <li className="sideNavbarListItem">
          <Message className="sideNavbarIcon" /> Messages
        </li>
        <li className="sideNavbarListItem">
          <Feedback className="sideNavbarIcon" /> Feedback
        </li>
      </ul>
    </div>
  )
}
