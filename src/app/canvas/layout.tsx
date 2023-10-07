import { Metadata } from 'next';
import React from 'react';

const CanvasLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default CanvasLayout;

export const metadata: Metadata = {
  title: '캔바스',
  description: '개신기해~',
};
