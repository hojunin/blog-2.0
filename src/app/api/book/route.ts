import { isCreateBookEntity } from '@/types/typeGuards/book';
import handleDataBase from '@/utils/database';
import {
  convertFormDataToObject,
  extractValuesFromForm,
} from '@/utils/database/entity';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const connection = await handleDataBase();
  const response = await new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM book ORDER BY created DESC',
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      },
    );
  });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const payload = await request.formData();
  if (!isCreateBookEntity(convertFormDataToObject(payload))) {
    return NextResponse.json(
      {
        message: '데이터 형식이 맞지 않습니다.',
      },
      { status: 400 },
    );
  }

  const connection = await handleDataBase();
  const queryKey = [
    'title',
    'quickDescription',
    'description',
    'author',
    'coverImage',
    'links',
    'tags',
  ];
  const insertQuery = `
    INSERT INTO book (${queryKey.join(', ')})
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = extractValuesFromForm(payload, queryKey);

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
