import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react'
import styled from "styled-components";

export default function UserUpdateForm() {

  const UserUpdateForm = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  `;

  return (
    <UserUpdateForm>
      <h2 className='userEdit-Title' >Edit User Information</h2>

      <form className='userEdit-form-container'>

        <section className='userEdit-left-section'>
          <div className="userEdit-form-inputs">

            <div className="userEdit-form-input">
              <label htmlFor="username"> Username  </label>
              <input type="text" name="username" placeholder='Adam Sam' id="username" />
            </div>

            <div className="userEdit-form-input">
              <label htmlFor="email"> Email  </label>
              <input type="email" name="email" placeholder='AdamSam451@gmail.com' id="email" />
            </div>

            <div className="userEdit-form-input">
              <label htmlFor="mobileno"> Phone No.  </label>
              <input type="text" name="mobileno" placeholder='055 625 4528' id="mobileno" />
            </div>

            <div className="userEdit-form-input">
              <label htmlFor="phoneno"> Mobile No.  </label>
              <input type="text" name="phoneno" placeholder='03 125 1256' id="phoneno" />
            </div>

            <div className="userEdit-form-input">
              <label htmlFor="address"> Address  </label>
              <input type="text" name="address" placeholder='3909 Wither Rd, Niagara Falls' id="" />
            </div>

          </div>

        </section>

        <section className='userEdit-right-section'>

          <div className="userEdit-upload-content">
            <img src="/img/Employees/image001.jpg" className='userEdit-img' alt="" />
            <label htmlFor="file">
              <Publish className='upload-icon' />
            </label>
            <input type="file" name="img" id="file" style={{ display: "none" }} />
          </div>

          <div className="editUser-btn-content">
            <Link to="/users">
              <button className='userEdit-btn userEdit-edit-btn'> Update </button>
              <button className='userEdit-btn userEdit-cancel-btn'> Cancel </button>
            </Link>
          </div>

        </section>


      </form>
    </UserUpdateForm>
  )
}
