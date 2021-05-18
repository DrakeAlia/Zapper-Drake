import { useState } from "react";

const SearchParams = () => {
  const [enter, setEnter] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="enter">
          Enter
          <input
            id="enter"
            onChange={(e) => setEnter(e.target.value)}
            placeholder="Enter ENS domain, a valid ETH, or BTC address"
          />
        </label>
        <button>Let's Go!</button>
      </form>
    </div>
  );
};

export default SearchParams;
