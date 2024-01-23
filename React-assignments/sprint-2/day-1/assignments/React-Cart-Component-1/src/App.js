import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 3,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {
  const [cart,setCart]=useState(data);

  const handleQty=(id,val)=>{
    // let updatedData=data.map((el)=>(el.id===id?{...el,quantity:el.quantity+val}:el));
    let updatedData=cart.map((item)=>(
      item.id===id?{...item,quantity:item.quantity+val}:item
    ))

    setCart(updatedData);
  }
  let total=cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0);
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */
        cart.map((el)=>(
          <Product key={el.id} {...el} handleQty={handleQty}/>
        ))
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {/* The total price should be in this syntax `Total :123` */}
        Total :{total}
      </h1>
    </div>
  );
}

export default App;
