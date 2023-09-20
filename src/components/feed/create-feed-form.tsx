'use client';
import { createFeed } from '@/api/actions/feed';
import useInput from '@/hooks/useInput';
import React from 'react';
import Button from '../common/button';

const CreateFeedForm = () => {
  const { value: description, onChangeInput: onChangeDescription } = useInput();
  return (
    <form action={createFeed} className="flex flex-col gap-y-3">
      <input
        name="description"
        type="text"
        value={description}
        required
        onChange={onChangeDescription}
        className="bg-slate-500 max-w-xs h-10 p-3 text-center border-white border-2 border-solid rounded-md shadow-md focus:text-blue-100"
      />

      <Button label="만들기" />
    </form>
  );
};

export default CreateFeedForm;
