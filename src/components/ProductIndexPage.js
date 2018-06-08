import React, { Component } from 'react';
import allProducts from '../data/allProducts';

class ProductIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [...allProducts]
    }
  }

  render(){
    return (
      <main className="ProductIndexPage">
        <h1>Product Index</h1>
        <ul>
          {
            this.state.products.map(
              product => (
                <li key={product.id}>
                  <a href="">{product.title}</a>
                  <p>{product.seller.full_name}</p>
                </li>
              ))}
        </ul>
      </main>
    )
  }
}

export default ProductIndexPage;
