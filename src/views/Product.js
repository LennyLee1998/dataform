import React from "react";
import ProductItem from "../components/ProductItem";

export default function Product({ category, data }) {
  
  const productItems = data.map((item, index) => {
    return <ProductItem key={index} {...item} />;
  });
  return (
    <div>
      <div className="product-category">{category}</div>
      {productItems}
    </div>
  );
}
