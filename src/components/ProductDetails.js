import React from 'react'

function ProductDetails(props){

  const { seller = {} } = props;
  // const seller = props.seller || {};

  return (
    <div className="ProductDetails">
      <h1>Product Details</h1>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.created_at}</p>
      <p>{seller.full_name}</p>
    </div>
  )
}

export default ProductDetails;
