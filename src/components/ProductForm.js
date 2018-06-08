import React from 'react';

function ProductForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const newProductData = {
      title: formData.get('title'),
      price: formData.get('price'),
      seller: {
        full_name: formData.get('full_name')
      }
    };
    onSubmit(newProductData)
  }
    return(
      <form className="ProductForm" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Product title..." />
        <input type="text" name="price" placeholder="price.." />
        <input type="text" name="full_name" placeholder="Your full name..." />
        <input type="submit" value="Submit" />
      </form>
    )
}

export default ProductForm;
