const Login = ({handleSubmit,setUserName,setPassword}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" onChange={(e)=>setUserName(e.target.value)} />
        <input type="text" placeholder="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
