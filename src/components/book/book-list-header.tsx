import React from 'react';

const BookListHeader = () => {
  return (
    <div className="flex px-5 py-4 border-border-color border-b-2">
      <span className="flex-1">제목</span>
      <span className="flex-1">작가</span>
      <span className="flex-1">간단 설명</span>
    </div>
  );
};

export default BookListHeader;
