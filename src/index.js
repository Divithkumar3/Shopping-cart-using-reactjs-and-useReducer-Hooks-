import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let initialState = {
  products: [
    { id: 1, name: 'Hair Gummies', cart: 0, price: 900 ,image:'hair.jpg'},
    { id: 2, name: 'Airpods', cart: 0, price: 1500,image:'air.jpg'},
    { id: 3, name: 'I phone pro', cart: 0, price: 100000 ,image:'iphone.jpeg'},
    { id: 4, name: 'Black Water', cart: 0, price: 200 ,image:'blackwater.avif'}
  ],
  totalprice: 0
};

function shopping(state, action) {
  switch (action.answer) {
    case 'Add':
      return {
        products: state.products.map((product) =>
          product.id === action.productId
            ? {...product, cart: product.cart + 1 }
            : product
        ),
        totalprice: state.totalprice + action.price
      };
    case 'Sub':
      return {
        products: state.products.map((product) =>
          product.id === action.productId && product.cart > 0
            ? { ...product, cart: product.cart - 1 }
            : product
        ),
        totalprice: state.totalprice - action.price
      };
    default:
      return state;
  }
}

function Calculation() {
  let [state, dispatch] = useReducer(shopping, initialState);
  return (
    <div className='product'>
      {state.products.map((product) => (
        <div key={product.id} className='product1'>
            <img src={require('./'+product.image)}></img>
          <h2>{product.name}</h2>
          <h2>Quantity: {product.cart}</h2>
          <h2>Price: {product.price}</h2>
          <button
            onClick={() =>
              dispatch({ answer: 'Add', productId: product.id, price: product.price })
            }
          >
            Add Product
          </button>&nbsp;&nbsp;
          <button
            onClick={() =>
              dispatch({ answer: 'Sub', productId: product.id, price: product.price })
            }
          >
            Remove Product
          </button>
        </div>
      ))}
      
      <div className='total'>Total Price: {state.totalprice} <button>Buy Now</button></div>
    </div>
  );
}

ReactDOM.render(<Calculation />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

