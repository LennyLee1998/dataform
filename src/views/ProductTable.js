import React from "react";
import Product from "./Product";

export default function ProductTable({data}) {
  // 当前的种类
  const categories = [...new Set(data.map((item) => item.category))];

  // 渲染的产品
  const products = categories.map((item) => {
    const currentData = data.filter((iten) => iten.category === item);
    return <Product key={item} data={currentData} category={item} />;
  });
  return (
    <div className="product-table">
      <div className="table-header">
        <div>Name</div>
        <div>Price</div>
      </div>
      {products}
    </div>
  );
}
