import handleDataBase from '@/utils/database';
import { NextResponse } from 'next/server';

export async function GET() {
  const connection = await handleDataBase();
  const response = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM book', (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });

  return NextResponse.json({ response });
}
