import { isCreateFeedEntity } from '@/types/typeGuards/feed';
import handleDataBase from '@/utils/database';
import { extractValues } from '@/utils/database/entity';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const connection = await handleDataBase();
  const response = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM feed', (error, result) => {
      if (error) {
        console.log(
          '🚀 ~ file: route.ts:11 ~ connection.query ~ error:',
          error,
        );
        return reject(error);
      }
      return resolve(result);
    });
  });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  if (!isCreateFeedEntity(payload)) {
    return NextResponse.json(
      {
        message: '데이터 형식이 맞지 않습니다.',
      },
      { status: 400 },
    );
  }

  const connection = await handleDataBase();
  const queryKey = ['description', 'image'];
  const insertQuery = `
      INSERT INTO feed (${queryKey.join(', ')})
      VALUES (?, ?)
    `;
  const values = extractValues(payload, queryKey);

  const response = await new Promise((resolve, reject) => {
    connection.query(insertQuery, values, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });

  return NextResponse.json({ response });
}
