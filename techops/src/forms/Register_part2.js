import React, { useState } from "react";

const Register_part2 = () => {
  //initial
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  //onchange handler
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Forms in React part 2</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={formData.fullname}
            onChange={onChangeHandler}
            placeholder="Full Name"
            type="text"
            name="fullname"
          />
        </div>
        <div>
          <input
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="Email"
            type="email"
            name="email"
          />
        </div>
        <div>
          <input
            value={formData.password}
            onChange={onChangeHandler}
            placeholder="password"
            type="password"
            name="password"
          />
        </div>
        <button type="Submit">Register</button>
      </form>
    </div>
  );
};

export default Register_part2;
