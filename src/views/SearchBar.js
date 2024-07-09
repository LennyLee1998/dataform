import React from "react";

export default function SearchBar({
  filterText,
  isStocked,
  onFilterChange,
  onIsStockedChange,
}) {
  return (
    <div className="mb-2">
      <form>
        <input
          className=" border border-gray-400 rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline "
          placeholder="Search"
          value={filterText}
          onChange={(e) => {
            onFilterChange(e.target.value);
          }}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={isStocked}
              onChange={(e) => onIsStockedChange(e.target.checked)}
            />
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  );
}
