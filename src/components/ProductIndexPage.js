import React, { Component } from 'react';
import allProducts from '../data/allProducts';
import ProductForm from './ProductForm';

class ProductIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [...allProducts]
    }
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(productParams){
    const { products } = this.state;
    // {
    //   title,
    //   price,
    //   seller: {
    //     full_name
    //   }
    // }
    const newProdWithID = {
      ...productParams,
      id: Math.random() * 1000000
    }
      // product: productParams.title,
      // seller: [productParams, ...products]
    this.setState({
      products: [newProdWithID, ...products]
    })
  }

  render(){
    return (
      <main className="ProductIndexPage">
        <ProductForm onSubmit={this.createProduct} />
        <h1>Product Index</h1>
        <ul>
          {
            this.state.products.map(
              product => (
                <li key={product.id}>
                  <a href="">{product.id} - {product.title}</a>
                  <p>{product.seller.full_name}</p>
                </li>
              ))}
        </ul>
      </main>
    )
  }
}

export default ProductIndexPage;
