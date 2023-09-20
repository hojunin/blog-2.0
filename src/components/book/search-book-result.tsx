'use client';
import React from 'react';
import BookListItem from './book-list-item';
import { NaverBook } from '@/types/book';

interface Props {
  books: NaverBook[];
}

const SearchBookResult = ({ books }: Props) => {
  if (books.length === 0) {
    return <p className="text-h2">결과가 없습니다</p>;
  }
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

export default React.memo(SearchBookResult);
