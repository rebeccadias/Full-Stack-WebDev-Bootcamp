import React, { useEffect, useState } from "react";
// import axios from 'axios';

const HTTPRequest = () => {
  //error
  //loading
  //data

  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  //using fetch
  useEffect(() => {
    fetch(apiURL)
      .then((data) => data.json().then((post) => console.log(post)))
      .catch((err) => console.log(err));
  }, []);

  //using axios
  //   useEffect(() => {
  //     axios
  //       .get(apiURL)
  //       .then((post) => console.log(post.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div>
      <h1>HTTP Request</h1>
    </div>
  );
};

export default HTTPRequest;
