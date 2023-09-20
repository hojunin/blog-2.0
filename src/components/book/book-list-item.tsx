import { Book } from '@/types/book';
import Image from 'next/image';
import React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLLIElement> {
  book: Book;
}

const BookListItem = ({ book, ...props }: Props) => {
  return (
    <li
      {...props}
      className="p-3 rounded-lg border-border-color border-2 flex flex-col items-center cursor-pointer hover:border-primary-color"
    >
      <Image
        src={book.coverImage}
        alt={`책 - ${book.title} 대표 이미지`}
        width={100}
        height={200}
        sizes="100vw"
        style={{
          width: '100%',
          maxWidth: 100,
          height: 'auto',
        }}
        objectFit="contain"
        className="rounded-lg border-border-color border-2 overflow-hidden ml-12 mt-6"
      />
      <p>{book.title}</p>
      <p>{book.quickDescription}</p>
    </li>
  );
};

export default BookListItem;
