import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";


const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const {
    setisAuth,
    setLoading,
    setErr,
    token,
    setToken,
  } = useContext(AuthContext);
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let data = await res.json();
      console.log(data);
      //   console.log("test");
      setToken(data.token);
      setisAuth(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
      console.log(error);
    }
  };
  console.log(token);
  return (
    <div>
      <form data-testid="auth_form" onSubmit={handleClick}>
        <input
          name="email"
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          data-testid="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
