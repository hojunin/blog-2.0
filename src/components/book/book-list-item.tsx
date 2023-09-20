import { Book } from '@/types/book';
import React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLLIElement> {
  book: Book;
}

const BookListItem = ({ book, ...props }: Props) => {
  return (
    <li
      {...props}
      className="flex cursor-pointer px-5 py-4 border-border-color border-b-2 hover:opacity-60"
    >
      <span className="flex-1">{book.title}</span>
      <span className="flex-1">{book.author}</span>
      <span className="flex-1">{book.quickDescription}</span>
    </li>
  );
};

export default BookListItem;
