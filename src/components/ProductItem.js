import React from "react";

export default function ProductItem({ price, name, stocked }) {
  return (
    <div className="product-item">
      <div className={stocked ? "" : "unstocked"}>{name}</div>
      <div>{price}</div>
    </div>
  );
}
