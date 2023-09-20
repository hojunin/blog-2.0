import React, { useEffect, useState } from 'react';
import { searchBookInAladin } from '@/api/book';

const useFetchAladinBooks = (query: string) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (query.length < 2) {
      return;
    }
    searchBookInAladin(query).then((result) => setBooks(result));
  }, [query]);

  return books;
};

export default useFetchAladinBooks;
