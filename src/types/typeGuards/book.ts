import { Book, CreateBookEntity } from '../book';

export const isBook = (book: unknown): book is Book => {
  if (!book) {
    return false;
  }
  return typeof (book as Book).id === 'number' && Boolean((book as Book).title);
};

export const isCreateBookEntity = (
  payload: unknown,
): payload is CreateBookEntity => {
  if (!payload) {
    return false;
  }

  return (
    Boolean((payload as CreateBookEntity).title) &&
    Boolean((payload as CreateBookEntity).coverImage) &&
    Boolean((payload as CreateBookEntity).description) &&
    Boolean((payload as CreateBookEntity).quickDescription) &&
    Boolean((payload as CreateBookEntity).author)
  );
};
