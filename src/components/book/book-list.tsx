import { fetchBooks } from '@/api/book';
import React from 'react';
import BookListItem from './book-list-item';
import BookListHeader from './book-list-header';

const BookList = async () => {
  const books = await fetchBooks();
  return (
    <div>
      <BookListHeader />
      <ul>
        {books.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
