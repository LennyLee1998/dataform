import React from "react";
import Product from "./Product";

export default function ProductTable({ data, filterText, isStocked }) {
  // 过滤文本
  const newData = data.filter((item) => {
    // includes 文本  isStocked
    // console.log(filterText);
    const ft = item.name.toLowerCase().includes(filterText.toLowerCase());
    // console.log(ft);
    console.log(isStocked ? ft && item.stocked : ft);
    return isStocked ? ft && item.stocked : ft;
  });
  // 当前的种类
  const categories = [...new Set(newData.map((item) => item.category))];

  // 渲染的产品
  const products = categories.map((item) => {
    const currentData = newData.filter((iten) => iten.category === item);
    return <Product key={item} data={currentData} category={item} />;
  });
  return (
    <div className="w-full">
      <div className=" text-lg font-bold flex items-center w-150 justify-between px-30">
        <div>Name</div>
        <div>Price</div>
      </div>
      {products}
    </div>
  );
}
