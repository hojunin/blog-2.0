'use client';
import useFetchBookSearch from '@/hooks/useFetchBookSearch';
import React from 'react';
import BookListItem from './book-list-item';

interface Props {
  query: string;
}

const SearchBookResult = ({ query }: Props) => {
  const books = useFetchBookSearch(query);
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
      {books.map((book) => (
        <BookListItem
          key={book.isbn}
          book={{
            title: book.title,
            author: book.author,
            quickDescription: book.description.slice(0, 30),
            coverImage: book.image,
          }}
        />
      ))}
    </ul>
  );
};

export default SearchBookResult;
