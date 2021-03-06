import React, { useState } from "react";

const Search = ({ getQuery }) => {
  //search
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <input
        type="search"
        maxLength="10"
        size="10"
        className="form-control"
        placeholder="search characters..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
};

export default Search;
