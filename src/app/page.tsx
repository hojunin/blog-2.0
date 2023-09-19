import BookList from '@/components/book/book-list';
import CreateBookForm from '@/components/book/create-book-form';
import { Fragment } from 'react';

export default async function Home() {
  return (
    <Fragment>
      <BookList />
      <CreateBookForm />
    </Fragment>
  );
}
