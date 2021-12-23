import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "./CreateUser.css"
import { countryList } from "../../Repository/Repository"



export default function CreateUser() {

  const CreateUserContainer = styled.div`
    padding: 25px;
 `;

  return (
    <CreateUserContainer>
      
      <h1 className="createUser-main-title">
        Create New User
      </h1>

      <form className='createUser-form-container'>

        <div className="createUser-form-input">
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" id="username" />
        </div>


        <div className="createUser-form-input">
          <label>Gender</label>
          <div className="createUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="createUser-form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="createUser-form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="createUser-form-input">
          <label htmlFor="mobile">Mobile No.</label>
          <input type="text" name="mobile" id="mobile" />
        </div>

        <div className="createUser-form-input">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>

        <div className="createUser-form-input">
          <label htmlFor="address">Nationality </label>
          <select name="countryList" id="countryList">
            <option value="">Select Your Nationality ....</option>
            {
              countryList.map(element => {
                return (<option value={element}> {element} </option>)
              })
            }
          </select>
        </div>

        <div className="createUser-form-input">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>



      </form>

        <div className="createUser-btn-content">
          <Link to="/users">
            <button className='userCreate-btn create-btn'> Create User </button>
          </Link>
          <input type='reset' className='userCreate-btn clear-btn' value="Clear" />
        </div>
    </CreateUserContainer>
  )
}
