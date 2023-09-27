import { NextResponse } from 'next/server';

export async function GET() {
  const CRYPTO_INDEX_IDS = ['BTCUSDT', 'ETHUSDT'];

  const fetchCryptoResponses = CRYPTO_INDEX_IDS.map((id) => {
    return fetch(`https://binance43.p.rapidapi.com/avgPrice?symbol=${id}`, {
      headers: {
        'X-RapidAPI-Key': process.env['X_RAPID_API_KEY'],
        'X-RapidAPI-Host': process.env['X_RAPID_API_HOST'],
      },
    });
  });
  const promiseCryptoResponse = await Promise.all(fetchCryptoResponses);
  const cryptoResults = promiseCryptoResponse.map((response) =>
    response.json(),
  );
  const unwrappedCryptoData = await Promise.all(cryptoResults);
  const normalizedCryptoData = unwrappedCryptoData.map((datum, index) => {
    return {
      CLASS_NAME: '암호화폐',
      KEYSTAT_NAME: index === 0 ? '비트코인' : '이더리움',
      DATA_VALUE: datum.price,
      CYCLE: new Intl.DateTimeFormat('ko-KR').format(new Date()),
      UNIT_NAME: '달러',
    };
  });

  const FINANCE_INDEX_IDS = ['FEDFUNDS', 'NASDAQCOM', 'SP500', 'DCOILBRENTEU'];
  const FRED_API_URLS = FINANCE_INDEX_IDS.map(
    (id) =>
      `https://api.stlouisfed.org/fred/series/observations?series_id=${id}&api_key=${process.env.FRED_API_KEY}&file_type=json&order_by=observation_date&sort_order=desc&limit=1`,
  );
  const fetchResponses = FRED_API_URLS.map((url) => fetch(url));
  const promiseResponse = await Promise.all(fetchResponses);
  const results = promiseResponse.map((response) => response.json());
  const unwrappedData = await Promise.all(results);
  const serializedData = await unwrappedData
    .map((datum) => datum?.observations)
    .flat()
    .map((datum, index) => {
      return {
        CLASS_NAME: index === 0 ? '시장금리' : index === 3 ? '원자재' : '주식',
        KEYSTAT_NAME:
          index === 0
            ? '연준금리'
            : index === 1
            ? '나스닥 지수'
            : index === 2
            ? 'S&P 500'
            : '두바이유 가격',
        DATA_VALUE: datum.value,
        CYCLE: datum.date,
        UNIT_NAME: index === 0 ? '%' : index === 4 ? '달러' : null,
      };
    });

  const validKeyList = [
    '원/달러 환율(종가)',
    '원/엔(100엔) 환율(매매기준율)',
    '원/유로 환율(매매기준율)',
    '원/위안 환율(종가)',
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
    const normalized = filtered.map((filteredData) => {
      if (
        typeof filteredData['UNIT_NAME'] === 'string' &&
        filteredData['UNIT_NAME'].includes('=')
      ) {
        return {
          ...filteredData,
          UNIT_NAME: 'P',
        };
      }
      return filteredData;
    });

    return NextResponse.json(
      [...normalized, ...serializedData, ...normalizedCryptoData].sort((a, b) =>
        b.CLASS_NAME.localeCompare(a.CLASS_NAME),
      ),
    );
  } catch (error) {
    return NextResponse.json({ message: '에러 발생' }, { status: 500 });
  }
}
