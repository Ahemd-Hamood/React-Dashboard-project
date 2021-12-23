import { Public, CalendarToday, PhoneAndroid, MailOutline, Home, Phone } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

export default function UserInfoView() {

  const UserInfoView = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  `;

  const UserViewTopSection = styled.div`
    display: flex;
    align-items: center;
  `;

  const UserViewBottomSection = styled.div`
    padding-left: 8px;
  `;

  return (
    <UserInfoView>

      <UserViewTopSection>
        <img src="/img/Employees/image001.jpg" alt="" className='userView-img' />
        <div className='userView-top-titles'>
          <h3 className="userView-username-text">
            Adam Sam
          </h3>
          <h4 className="userView-userTitle-text">
            Software Developer
          </h4>
        </div>
      </UserViewTopSection>

      {/* ----------------------------------------------------------------------------------- */}

      <UserViewBottomSection>

        <h2 className='userView-subTitle'>User Details</h2>

        <div className="userView-info-content">
          <CalendarToday className='icon' />
          <span className='info-title' > 10 April 1995 </span>
        </div>

        <div className="userView-info-content">
          <Public className='icon' />
          <span className='info-title' > USA </span>
        </div>

        <div className="userView-info-content">
          <Home className='icon' />
          <span className='info-title'> 3909 Wither Rd, Niagara Falls </span>
        </div>


        <h2 className='userView-subTitle'>Contact Details</h2>

        <div className="userView-info-content">
          <MailOutline className='icon' />
          <span className='info-title'> AdamSam451@gmail.com </span>
        </div>

        <div className="userView-info-content">
          <PhoneAndroid className='icon' />
          <span className='info-title'> 055 625 4528 </span>
        </div>

        <div className="userView-info-content">
          <Phone className='icon' />
          <span className='info-title'> 03 125 1256 </span>
        </div>

      </UserViewBottomSection>

    </UserInfoView>
  )
}
