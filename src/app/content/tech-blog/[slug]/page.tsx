'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts();
//   console.log(
//     '🚀 ~ file: page.tsx:7 ~ generateStaticParams ~ allPosts:',
//     allPosts,
//   );
// }

const TechBlogDetail = ({ params: { slug } }) => {
  console.log('🚀 ~ file: page.tsx:14 ~ TechBlogDetail ~ slug:', slug);

  return <div></div>;
};

export default TechBlogDetail;
