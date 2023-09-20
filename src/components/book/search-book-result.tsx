'use client';
import useFetchAladinBooks from '@/hooks/useFetchAladinBooks';
import React from 'react';
import BookListItem from './book-list-item';

interface Props {
  query: string;
}

const SearchBookResult = ({ query }: Props) => {
  const books = useFetchAladinBooks(query);
  return (
    <>
      {books.map((book) => (
        <BookListItem
          key={book.isbn}
          book={{
            title: book.title,
            author: book.author,
            quickDescription: book.description,
          }}
        />
      ))}
    </>
  );
};

export default SearchBookResult;
