import { useState } from "react";



const Login = ({handleChange,handleSubmit,noti}) => {
  



  return (
    <>
      <div data-testid="loginForm">
        <h1>Login</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" onChange={handleChange} />
          </label>
          <br />
          <input type="submit" onClick={handleSubmit}></input>
        </form>
      </div>
      {/* Show the below p tag only when someone tried to login with invalid credentials */}
      {noti?<p data-testid="invalidAlert">Invalid credentials</p>:<p data-testid="invalidAlert"></p>}
    </>
  );
};

export default Login;

