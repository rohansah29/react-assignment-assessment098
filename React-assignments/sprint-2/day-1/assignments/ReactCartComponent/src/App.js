import { useState } from "react";
import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
function App() {
  const [cart,setCart] = useState(data);

  const handleQty=(id,val)=>{
    let updateCart=cart.map((item)=>(
      item.id===id?{...item,quantity:item.quantity+val}:item
    ))
    setCart(updateCart)
  }
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0);

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {
          cart.map((item)=>(
            <Product key={item.id} {...item} handleQty={handleQty}/>
          ))
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {totalPrice}
      </h1>
    </div>
  );
}

export default App;
