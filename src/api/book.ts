import { Book, NaverBook } from '@/types/book';
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

export const searchBookInNaver = async (query: string) => {
  const response = await fetcher<NaverBook[]>({
    path: `api/book/naver-book-search?query=${query}`,
  });

  return response;
};
