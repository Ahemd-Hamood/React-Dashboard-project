import React from 'react'
import { NotificationsNone, Settings } from '@material-ui/icons';
// import { AccountCircle } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';


export default function RightSection() {
  return (
    <div className='topNavbar-right-section'>

      <div className="icons-container">
        <NotificationsNone className='icon'  />
        <span className="notify-counter">99</span>
      </div>

      <div className="icons-container">
        <Settings className='icon' />
      </div>

      <div className="icons-container">
        <EmailIcon className='icon'  />
        <span className="notify-counter green-bg">99</span>
      </div>

      <div className="icons-container">
        {/* <AccountCircle className='icon'  /> */}
        <img className='img-profile' src="/img/profile-img.jpg" alt="" />
      </div>


    </div>
  )
}
