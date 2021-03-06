import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../axiosWithAuth";

const Schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
});

const defaultVal = {
    username: "",
    password: "",
  }


function Signup() {
  const [signinState, setsigninState] = useState(defaultVal);
  const [isValid, setIsValid] = useState(true);
  const [err, setErr] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  useEffect(() => {
    Schema.isValid(signinState).then((valid) => {
      setIsValid(!valid);
    });
  }, [signinState]);


  const formSubmit = (e) => {
    e.preventDefault();  
  

  const newUser = {
    username: signinState.username.trim(),
    password: signinState.password.trim(),
  };

  axiosWithAuth()
  .post("https://anywherefitness-api.herokuapp.com/api/auth/register", newUser)
  .then((res) => {
    console.log("NEW RESPONSE", res);
    push("/login");
                 })
  .catch((err) => {
    debugger;
    console.log(err);
                  });
  setsigninState(defaultVal);

  };


  const validate = (e) => {
    yup
      .reach(Schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErr({...err, [e.target.name]: "" });
      })
      .catch((error) => {
        console.log(error.errors);
        setErr({...err, [e.target.name]: error.errors[0]})
      })
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    setsigninState({ ...signinState, [e.target.name]: e.target.value });
  };




  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={formSubmit}>
          <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              value={signinState.username}
              onChange={inputChange}
            />
            {err.username.length > 0 ? <p>{err.username}</p> : null}
          
        
        
          <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={signinState.password}
              onChange={inputChange}
            />
            {err.password.length > 0 ? <p className="error">{err.password}</p> : null}
          
        <button type="submit" disabled={isValid}>
          Sign Up
        </button>
      </form>
    </div>
  );
  }

export default Signup;