import { Metadata } from 'next';
import React from 'react';

const FeedLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default FeedLayout;

export const metadata: Metadata = {
  title: '피드',
  description: '쓰고싶은 말 그때그때 쓰는 페이지',
};
