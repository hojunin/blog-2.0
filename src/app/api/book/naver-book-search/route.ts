import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');

  const naverSearchApiUrl = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(
    query,
  )}`;
  const response = await fetch(naverSearchApiUrl, {
    headers: {
      'X-Naver-Client-Id': process.env.X_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.X_NAVER_CLIENT_SECRET,
    },
  });
  if (response.ok) {
    const data = await response.json();

    return NextResponse.json(data.items);
  }
}
