import { Book } from '@/types/book';
import { fetcher } from './fetcher';
import { BOOK } from './urls';

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

export const searchBookInAladin = async (query: string) => {
  const response = await fetcher({
    path: `api/book/aladin?query=${query}`,
  });

  return response;
};
