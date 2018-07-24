import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div className="book__search search">
    <p className="search__title">Filter books by title</p>
    <input className="search__input" type="text" value={value} onChange={onChange} />
  </div>
);

export default SearchBar;
