// import logo from './logo.svg';
import "./App.scss";
import ProductTable from "./views/ProductTable";
import SearchBar from "./views/SearchBar";
import data from "./mock/data";

export default function App() {
  return (
    <div className="app">
      <SearchBar />
      <ProductTable data={data} />
    </div>
  );
}
