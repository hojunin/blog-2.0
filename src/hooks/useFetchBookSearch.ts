import React, { useEffect, useState } from 'react';
import { searchBookInNaver } from '@/api/book';
import { NaverBook } from '@/types/book';

const useFetchBookSearch = (query: string) => {
  const [books, setBooks] = useState<NaverBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (query.length < 2 || isLoading || books.length > 0) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      searchBookInNaver(query)
        .then((result) => setBooks(result))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, [query, isLoading, books]);

  return books;
};

export default useFetchBookSearch;
