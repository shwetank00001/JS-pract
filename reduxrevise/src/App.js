import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { totalAmt, getAllData } from './feature/cart/cartSlice';
import React from 'react';
import Modal from './components/Modal';


function App() {
  const dispatch = useDispatch()

  const cartItem = useSelector(function(globalState){
    return globalState.cart.cartItem
  })
  const isOpen = useSelector(function(globalState){
    return globalState.modal.isOpen
  })

  React.useEffect(() => {
    dispatch(getAllData())
  }, [])


  React.useEffect(() => {
    dispatch(totalAmt())
  },[cartItem])
  
  return (
    <div className="App">
      <h1>Will finish redux toolkit.</h1>
      {isOpen && <Modal /> }
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default App;
