import React, { useState } from "react";
//give intial values to each form input
//onchange
//submit
const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onchange fullname function
  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  //onchange email function
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  //onchange password function
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // form submit handler

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({ fullname, email, password });
  };

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            onChange={onChangeFullName}
            placeholder="Full Name"
            type="text"
            value={fullname}
          />
        </div>
        <div>
          <input
            onChange={onChangeEmail}
            placeholder="Email"
            type="email"
            value={email}
          />
        </div>
        <div>
          <input
            onChange={onChangePassword}
            placeholder="password"
            type="password"
            value={password}
          />
        </div>
        <button type="Submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
