import Link from 'next/link';
import React from 'react';

const ContentPage = () => {
  return (
    <div>
      <h1 className="text-h1 mb-5">컨텐츠</h1>

      <div className="grid grid-cols-3 gap-5 w-full h-24">
        <Link href={'/content/book'}>책 페이지</Link>
      </div>
    </div>
  );
};

export default ContentPage;
