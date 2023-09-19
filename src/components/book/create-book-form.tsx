'use client';
import React from 'react';
import { createBook } from '@/api/actions/book';
import useInput from '@/hooks/useInput';

const CreateBookForm = () => {
  const { value: title, onChangeInput: onChangeTitle } = useInput();
  const { value: description, onChangeInput: onChangeDescription } = useInput();
  const { value: quickDescription, onChangeInput: onChangeQuickDescription } =
    useInput();
  const { value: author, onChangeInput: onChangeAuthor } = useInput();
  const { value: coverImage, onChangeInput: onChangeCoverImage } = useInput();

  return (
    <form action={createBook} className="flex flex-col gap-y-3">
      <input
        name="title"
        type="text"
        value={title}
        required
        onChange={onChangeTitle}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-600"
      />
      <input
        name="description"
        type="text"
        required
        value={description}
        onChange={onChangeDescription}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-600"
      />
      <input
        name="quickDescription"
        type="text"
        required
        value={quickDescription}
        onChange={onChangeQuickDescription}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-600"
      />
      <input
        name="author"
        type="text"
        required
        value={author}
        onChange={onChangeAuthor}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-600"
      />
      <input
        name="coverImage"
        type="text"
        required
        value={coverImage}
        onChange={onChangeCoverImage}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-600"
      />

      <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
        <span className="relative text-sm text-white">만들기</span>
        <div className="flex items-center -space-x-3 translate-x-3">
          <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
          <svg
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </button>
    </form>
  );
};

export default CreateBookForm;
