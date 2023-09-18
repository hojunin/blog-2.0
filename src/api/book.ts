import { Book } from '@/types/book';
import { HTTP_METHOD_TYPE, fetcher } from './fetcher';
import { BOOK } from './urls';
import { revalidateTag } from 'next/cache';

export const fetchBooks = async () => {
  const response = await fetcher<Book[]>({
    path: BOOK,
    config: { cache: 'no-cache', method: 'GET' },
  });
  return response;
};
export const searchBooks = () => {};

export const updateBook = () => {};
export const deleteBook = () => {};
