import React from 'react';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';

function App(props) {
    return (
      <div className="App">
        <h1>App.js</h1>
        <ProductShowPage />
        <ProductIndexPage />
      </div>
    );
  }

export default App;
