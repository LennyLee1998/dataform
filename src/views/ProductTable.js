import React from "react";
import TableHeader from "../components/TableHeader";
import ProductCategory from "../components/ProductCategory";
import ProductItem from "../components/ProductItem";

export default function ProductTable() {
  return (
    <div className="product-table">
      <TableHeader />
      <ProductCategory />
      <ProductItem />
    </div>
  );
}
