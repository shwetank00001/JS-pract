import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { totalAmt } from './feature/cart/cartSlice';
import React from 'react';
import Modal from './components/Modal';


function App() {
  const cartItem = useSelector(function(globalState){
    console.log(globalState.cart)
    return globalState.cart
  })

  const isOpen = useSelector(function(globalState){
    return globalState.modal.isOpen
  })

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(totalAmt())
  },[cartItem])
  
  return (
    <div className="App">
      <h1>Will finish redux toolkit.</h1>
      <Navbar />
      {isOpen && <Modal /> }
      <ProductContainer />
    </div>
  );
}

export default App;
