

const Login = ({handleSubmit,handleChange,msg}) => {
  return (
    <>
      <div data-testid="loginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <input type="submit"></input>
        </form>
      </div>
      {/* Show the below p tag only when someone tried to login with invalid credentials */
      msg?<p data-testid="invalidAlert">Invalid credentials</p>:""
      }
    </>
  );
};

export default Login;
