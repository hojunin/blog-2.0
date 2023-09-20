'use client';
import useToastStore from '@/store/toast';
import React, { useEffect } from 'react';

const BookToast = () => {
  const { setVisible, setContent } = useToastStore();
  const openToast = () => {
    setContent('토스트 메시지');
    setVisible(true);
  };

  useEffect(() => {
    openToast();
  }, []);

  return <div />;
};

export default BookToast;
