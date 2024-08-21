import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SearchOrder(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleInput(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleInput}>
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-1 text-sm text-stone-500 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Order Id #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
