import React, { useState } from 'react'
import styled from "styled-components";
import { Delete } from '@material-ui/icons';
import "./ProductList.css"
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';


import { productRows } from "../../Repository/Repository"


export default function ProductList() {

  const [productData, setProductData] = useState(productRows);

  // Delete a row from a table on delete click
  const DeleteUser = (id) => {
    setProductData(productData.filter(data => data.id !== id))
    // filter when the condition is true add data into the dataUser collection
    // but if the data is false then filter or don't include the data into dataUser collection
  }

  const ProductListContainer = styled.div`
    height: 100%;
  `;


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productName-content">
            <img className="product-img" src={`/img/${params.row.imgUrl}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (<p class={`status-cell ${params.row.status === 'In Stock' ? 'green' : 'red'}`}>{params.row.status}</p>)
      }
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/edit/" + params.row.id}>
              <button className="productEdit action-btn">Edit</button>
            </Link>
            <Delete
              className="productDelete-icon"
              onClick={() => DeleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];


  return (
    <ProductListContainer>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={13}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  )
}
