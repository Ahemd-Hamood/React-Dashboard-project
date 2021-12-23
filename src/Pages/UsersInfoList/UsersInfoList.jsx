import React, { useState } from 'react'
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';
import "./UsersInfoList.css"
import { Link } from 'react-router-dom';

import { UserRowData } from "../../Repository/Repository"

export default function UsersInfoList() {

  const [userData, setUserData] = useState(UserRowData);

  // Delete a row from a table on delete click
  const DeleteUser = (id) => {
    setUserData(userData.filter(data => data.id !== id))
    // filter when the condition is true add data into the dataUser collection
    // but if the data is false then filter or don't include the data into dataUser collection
  }

  const UsersInfoListContainer = styled.div`
    height: 95%;
    width: 100%;
    padding: 22px;
    padding-top: 12px;
  `;


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Username',
      width: 300,
      editable: false,
      renderCell: (params) => {
        return (
          <div className='username-content'>
            <img className='user-img' src={`/img/Employees/${params.row.imgUrl}`} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (<p class={`status-cell ${params.row.status === 'Active' ? 'green' : 'red'}`}>{params.row.status}</p>)
      }
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
      editable: false
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/edit/${params.row.id}`}>
              <button className='userEdit action-btn'> Edit </button>
            </Link>
            <Delete className='userDelete-icon' onClick={() => DeleteUser(params.row.id)} />
          </>
        )
      }
    }
  ];

  return (
    <UsersInfoListContainer>

      <section className='userAdd-content'>
        <Link to={`/user/create`}>
          <button className='userAdd action-btn'> Create New User </button>
        </Link>
      </section>

      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={13}
        checkboxSelection
        disableSelectionOnClick
      />

    </UsersInfoListContainer>
  )
}




