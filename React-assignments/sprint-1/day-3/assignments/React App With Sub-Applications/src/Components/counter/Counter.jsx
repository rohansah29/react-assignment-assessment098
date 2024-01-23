import { useState } from "react";
import Button from "../common/button/Button";
import Container from "../common/container/Container";

function Counter() {
  const [count,setCount] = useState(0);
  const handleINC=()=>{
    setCount(count+1);
  }
  const handleDEC=()=>{
    setCount(count-1);
  }
  const handleRESET=()=>{
    setCount(0);
  }
  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Count : {count}</h1>
      <div>
        {/* Add 3 buttons for INC, DEC, RESET using Button component */
        <>
        <Button disabled={count>=10} onClick={handleINC} text="INC" />
        <Button disabled={count<=0} onClick={handleDEC} text="DEC"/>
        <Button disabled={count==0} onClick={handleRESET} text="RESET"/>
        </>
        }
      </div>
    </Container>
  );
}

export default Counter;
