import ProductTable from "./views/ProductTable";
import SearchBar from "./views/SearchBar";
import data from "./mock/data";
import { useState } from "react";

export default function App() {
  const [filterText, setFilterText] = useState("");
  const [isStocked, setIsStocked] = useState(false);

  return (
    <div className="w-60 my-1 mx-auto p-2">
      <SearchBar
        filterText={filterText}
        isStocked={isStocked}
        onFilterChange={setFilterText}
        onIsStockedChange={setIsStocked}
      />
      <ProductTable data={data} filterText={filterText} isStocked={isStocked} />
    </div>
  );
}
