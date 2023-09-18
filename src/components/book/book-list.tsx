import { fetchBooks } from '@/api/book';
import React from 'react';

const BookList = async () => {
  const books = await fetchBooks();
  return (
    <div>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
};

export default BookList;
