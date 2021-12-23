import React from 'react'
import styled from "styled-components";
import EditTitle from './components/EditTitle';
import UserInfoView from './components/UserInfoView';
import UserUpdateForm from './components/UserUpdateForm';

import "./EditUser.css"

export default function EditUser() {

  const EditUserMainContainer = styled.div`
      flex: 4;
      padding: 20px;
  `;

  const UserEditContainer = styled.div`
      display: flex;
      margin-top: 22px;
  `;

  return (
    <EditUserMainContainer>


      <EditTitle />

      {/* ---------------------------------------------------------------------------------------- */}


      <UserEditContainer>
        <UserInfoView />
        <UserUpdateForm />
      </UserEditContainer>


    </EditUserMainContainer>
  )
}
