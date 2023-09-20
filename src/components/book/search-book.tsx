'use client';
import useInput from '@/hooks/useInput';
import React from 'react';
import SearchBookResult from './search-book-result';

const SearchBook = () => {
  const {
    value: query,
    onChangeInput: setQuery,
    reset: resetQuery,
  } = useInput();

  return (
    <div>
      <input value={query} onChange={setQuery} />

      <SearchBookResult query={query} />
    </div>
  );
};

export default SearchBook;
