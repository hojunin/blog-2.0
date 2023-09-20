import BookList from '@/components/book/book-list';
import BookToast from '@/components/book/book-toast';
import CreateBookForm from '@/components/book/create-book-form';
import React from 'react';

const ContentPage = () => {
  return (
    <div>
      <BookList />
      <BookToast />
      <CreateBookForm />
    </div>
  );
};

export default ContentPage;
