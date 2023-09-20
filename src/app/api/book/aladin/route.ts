import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');

  const aladinSearchApiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.ALADIN_API_KEY}&Query=${query}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

  const response = await fetch(aladinSearchApiUrl);
  if (response.ok) {
    const data = await response.json();

    return NextResponse.json(data.item);
  }
}
