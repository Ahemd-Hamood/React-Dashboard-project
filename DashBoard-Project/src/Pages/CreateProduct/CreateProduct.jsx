import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "./CreateProduct.css"
import { Publish } from '@material-ui/icons';

export default function CreateProduct() {


  const CreateProductContainer = styled.div`
      padding: 30px;
  `;

  return (
    <CreateProductContainer>
      <h1 className="createProduct-main-title">
        Create New User
      </h1>

      <form className='createProduct-form-container'>

        <div className="createProduct-form-input">
          <label htmlFor="productName">Product Name</label>
          <input type="text" name="productName" id="productName" />
        </div>

        <div className="createProduct-form-input">
          <label htmlFor="Stock">Stock</label>
          <input type="number" name="Stock" id="Stock" />
        </div>


        <div className="createProduct-form-input">
          <label>Active</label>
          <select name="isActive" id="isActive">
            <option value="Yes">Active</option>
            <option value="No">Disable</option>
          </select>
        </div>

        <div className="createProduct-form-input">
          <label htmlFor="Price">Price</label>
          <input type="text" name="Price" id="Price" />
        </div>

        <div className="createProduct-form-input">
          <label htmlFor="Price">Warranty</label>
          <input type="text" name="Price" id="Price" />
        </div>


        <div className="createProduct-form-input">
          <label htmlFor="Price">Upload Product Image</label>
          <input type="file" name="img" id="file" style={{marginTop: "18px"}} />
        </div>

      </form>

      <div className="createUser-btn-content">
        <Link to="/users">
          <button className='ProductCreate-btn createProduct-btn'> Create Product </button>
        </Link>
        <input type='reset' className='ProductCreate-btn clear-btn' value="Clear" />
      </div>


    </CreateProductContainer>
  )
}
