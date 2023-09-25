import { NextResponse } from 'next/server';

export async function GET() {
  const validKeyList = [
    '원/달러 환율(종가)',
    '원/엔(100엔) 환율(매매기준율)',
    '원/유로 환율(매매기준율)',
    '원/위안 환율(종가)',
    '국제유가(Dubai, 현물)',
    '금',
    '실업률',
    '고용률',
    '고령인구비율(65세 이상)',
    '한국은행 기준금리',
    '코스피지수',
    '코스닥지수',
    '경제활동인구',
    '취업자수',
    '합계출산율',
    '소비자물가지수',
    '소비자심리지수',
    '지니계수',
  ];
  let pageParms = [];
  for (let i = 0; i < 10; i++) {
    pageParms.push(`${i * 10 + 1}/${(i + 1) * 10}`);
  }
  const responses = pageParms.map((param) =>
    fetch(
      `https://ecos.bok.or.kr/api/KeyStatisticList/sample/json/kr/${param}`,
      { method: 'GET' },
    ),
  );
  try {
    const responseArray = await Promise.all(responses);
    const results = responseArray.map((response) => response.json());
    const unwrappedData = await Promise.all(results);
    const data = await unwrappedData
      .map((datum) => datum?.KeyStatisticList?.row)
      .flat();
    const filtered = data.filter((datum) =>
      validKeyList.some((key) => key === datum.KEYSTAT_NAME),
    );

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ message: '에러 발생' }, { status: 500 });
  }
}
