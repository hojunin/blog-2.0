import React, { useEffect } from 'react';
import { ValueOf } from 'next/dist/shared/lib/constants';

export const ToastType = {
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

interface ToastProps {
  close: () => void;
  message: string;
  type: ValueOf<typeof ToastType>;
}
const Toast = ({ close, type, message }: ToastProps) => {
  useEffect(() => {
    if (!(typeof close === 'function')) {
      return;
    }
    const timeout = setTimeout(close, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [close]);

  return (
    <div
      className={`fixed right-20 top-100 ${
        type === ToastType.SUCCESS ? 'bg-primary' : 'bg-error'
      } w-300 p-20 text-white rounded-8 animate-fadeIn`}
    >
      {message}
    </div>
  );
};

export default Toast;
