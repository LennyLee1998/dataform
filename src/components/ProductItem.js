import React from "react";

export default function ProductItem({ price, name, stocked }) {
  return (
    <div className="w-48 flex justify-between font-medium">
      <div className={stocked ? "" : "text-red-400"}>{name}</div>
      <div>{price}</div>
    </div>
  );
}
