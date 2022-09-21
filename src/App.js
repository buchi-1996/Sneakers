import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';

function App() {
  const [overflow, setOverflow] = useState(false)
  const [inCart, setInCart] = useState([])

  console.log(inCart)

  console.log(overflow)


  return (
    <div className={`${overflow ? 'h-screen overflow-y-hidden' : ''} App `}>
    <Header inCart={inCart} setInCart={setInCart}/>
    <ProductDetails overflow={setOverflow} inCart={inCart} setInCart={setInCart}/>
    </div>
  );
}

export default App;
