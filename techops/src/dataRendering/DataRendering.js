import React, { useState } from "react";
const DataRendering = () => {
  const [products, setProducts] = useState([
    { name: "Mac", price: 120, desc: "best goods ever", id: 1 },
    { name: "iphone", price: 200, desc: "expensive af", id: 2 },
  ]);

  return (
    <div>
      <h1>DataRendering</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default DataRendering;

// we can fetch the data from an api in the useState (initial state and then render it )
