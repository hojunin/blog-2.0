import { Metadata } from 'next';
import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ContentLayout;

export const metadata: Metadata = {
  title: '콘텐츠',
  description: '내가 만드는 모든 콘텐츠',
};
