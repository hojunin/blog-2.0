import BookList from '@/components/book/book-list';
import SearchBook from '@/components/book/search-book';
import React from 'react';

const BookPage = () => {
  return (
    <div>
      <h1 className="text-h1">독서 기록</h1>

      {/* <BookList /> */}
      <SearchBook />
    </div>
  );
};

export default BookPage;
