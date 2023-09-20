'use client';
import useInput from '@/hooks/useInput';
import React, { KeyboardEvent, useState } from 'react';
import SearchBookResult from './search-book-result';
import { NaverBook } from '@/types/book';
import { searchBookInNaver } from '@/api/book';

const SearchBook = () => {
  const {
    value: query,
    onChangeInput: setQuery,
    reset: resetQuery,
  } = useInput();
  const [books, setBooks] = useState<NaverBook[]>([]);

  const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      searchBookInNaver(query)
        .then((result) => setBooks(result))
        .finally(resetQuery);
      return;
    }
  };

  return (
    <div>
      <input value={query} onChange={setQuery} onKeyPress={onKeyPress} />

      <SearchBookResult books={books} />
    </div>
  );
};

export default SearchBook;
