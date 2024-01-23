import { useState } from "react";


function Counter(){
    const [count,setcount]= useState(0);

    const add=()=>{
        setcount(count+1);
    }
    const sub=()=>{
        setcount(count-1);
    }
    const double=()=>{
        setcount(count*2);
    }
    return (
        
        <div>
            <h2 data-testid="counter-header">Counter</h2>
            <h3 data-testid="count">{count}</h3>
            <button onClick={add} data-testid="add-btn">+</button>
            <button onClick={sub} data-testid="subtract-btn">-</button>
            <button onClick={double} data-testid="double-btn">Double</button>
        </div>
    )
}
export default Counter;