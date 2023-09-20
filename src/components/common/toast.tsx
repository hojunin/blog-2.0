'use client';
import React, { useEffect } from 'react';
import useToastStore, { ToastType } from '@/store/toast';

const TOAST_DURATION = 3000;

const Toast = () => {
  const { content, visible, type, setVisible, setContent } = useToastStore();

  useEffect(() => {
    const timeout = setTimeout(closeToast, TOAST_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [visible]);

  const closeToast = () => {
    setContent('');
    setVisible(false);
  };

  if (!visible) {
    return <></>;
  }

  return (
    <div
      className={`fixed right-20 top-100 ${
        type === ToastType.SUCCESS ? 'bg-green-500' : 'bg-red-600'
      } w-300 p-20 text-white rounded-8 animate-fadeIn`}
    >
      {content}
    </div>
  );
};

export default Toast;
