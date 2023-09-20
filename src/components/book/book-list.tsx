import { fetchBooks } from '@/api/book';
import React from 'react';
import BookListItem from './book-list-item';

const BookList = async () => {
  const books = await fetchBooks();
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
