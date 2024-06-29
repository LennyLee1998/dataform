// import logo from './logo.svg';
import "./App.css";
import data from "./mock/data";
import ProductTable from "./views/ProductTable";
import SearchBar from "./views/SearchBar";

export default function App() {
  console.log("data", data);
  return (
    <div className="app">
      <SearchBar />
      <ProductTable />
    </div>
  );
}
