import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Chart from "../components/SimpleChart/SimpleChartComp"

import "./ProductEdit.css"
import { productData } from "../../Repository/Repository"
import { Publish } from '@material-ui/icons';

const ProductEditContainer = styled.div`
    padding: 15px;
  `;

export default function ProductEdit() {
  return (
    <ProductEditContainer>
      <div className="productEdit-title-section">
        <h1 className='editProduct-main-title' >Product Edit</h1>
        <Link to="/product/create">
          <button className='action-btn productAdd-btn'> Create Product </button>
        </Link>
      </div>

      <div className="productEdit-top-section">

        <div className="productEdit-left-section">
          <Chart title="Product Sales" data={productData} dataKey="Sales" />
        </div>

        <div className="productEdit-right-section">

          <div className="productEdit-info-Top">
            <img src="/img/iphone13.jpg" className='productEdit-img' alt="" />
            <span className="productEdit-name"> iPhone 13 </span>
          </div>

          <div className="productEdit-info-Bottom">
            <div className="productEdit-info-item">
              <span className="productEdit-info-key">ID:</span>
              <span className="productEdit-info-value">1252235</span>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div className="productEdit-info-item">
              <span className="productEdit-info-key">Sales:</span>
              <span className="productEdit-info-value">4582</span>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div className="productEdit-info-item">
              <span className="productEdit-info-key">Active:</span>
              <span className="productEdit-info-value">Yes</span>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div className="productEdit-info-item">
              <span className="productEdit-info-key">In stock:</span>
              <span className="productEdit-info-value">None</span>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div className="productEdit-info-item">
              <span className="productEdit-info-key">Price:</span>
              <span className="productEdit-info-value">1250$</span>
            </div>
            {/* ------------------------------------------------------------------ */}
          </div>
        </div>
      </div>





      <div className="productEdit-bottom-section">
        <form action="" className="productEdit-form">

          <div className="productEdit-form-left">

            <div className="productEdit-from-section"> 
                <div className="productEdit-form-item">
                  <label htmlFor="pname"> Product Name </label>
                  <input type="text" name="pname" id="pname" value="iPhone 13" />
                </div>

                  <div className="productEdit-form-item">
                    <label htmlFor="instock"> In Stock </label>
                    <select name="instock" id="instock">
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="productEdit-form-item">
                    <label htmlFor="isActive"> is Active </label>
                    <select name="isActive" id="isActive">
                      <option value="Yes">Active</option>
                      <option value="No">Disable</option>
                    </select>
                  </div>
              </div>

            <div className="productEdit-from-section"> 
              <div className="productEdit-form-item">
                <label htmlFor="pricename"> Product Price </label>
                <input type="text" name="pricename" id="pricename" value="$1,251" />
              </div>

                <div className="productEdit-form-item">
                  <label htmlFor="Quantity"> Quantity/Pieces </label>
                  <input type="text" name="Quantity" id="Quantity" value="452" />
                </div>

                <div className="productEdit-form-item">
                  <label htmlFor="Warranty"> Warranty <span className='small-title'>(In Years) </span> </label>
                  <input type="text" name="Warranty" id="Warranty" value="2 Years" />
                </div>
            </div>



          </div>

          <div className="productEdit-form-right">
            <div className="productEdit-upload">
              <img src="/img/iphone13.jpg" alt="" className="productEdit-upload-img" />
              <label htmlFor="file">
                <Publish className='upload-icon' />
              </label>
              <input type="file" name="img" id="file" style={{ display: "none" }} />
            </div>

            <button className='action-btn productEdit-btn'> Update </button>
          </div>
        </form>
      </div>


    </ProductEditContainer>
  )
}
