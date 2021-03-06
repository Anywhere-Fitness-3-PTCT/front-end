import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../axiosWithAuth";



const Login = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [error, setError] = useState("");

  const { push } = useHistory();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://anywherefitness-api.herokuapp.com/api/auth/login",formValues)
      .then((res) => {
        console.log(res);
        setError("");
        localStorage.setItem("token", res.data.token);
        push("/classes");
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid username or password.");
      });
    setFormValues(initialValues);
  };

  return (
    <div>
        <div data-testid="loginForm" className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <br />
            <label> Password: </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <br />
            <button id="submit">Log In</button>
          </form>
        </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;