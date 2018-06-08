import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import detailedProduct from '../data/detailedProduct';

// function ProductShowPage(props){
//   return (
//     <main className="ProductShowPage">
//       <ProductDetails {...detailedProduct} />
//       <ReviewList reviews={detailedProduct.reviews} />
//     </main>
//   )
// }

class ProductShowPage extends Component {
  render(){
    return(
      <main className="ProductShowPage">
        <ProductDetails {...detailedProduct} />
        <ReviewList reviews={detailedProduct.reviews} />
      </main>
    )
  }
}

export default ProductShowPage;
