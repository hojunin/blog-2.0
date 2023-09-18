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

  return NextResponse.json(response);
}

export async function POST() {
  const connection = await handleDataBase();

  const insertQuery = `
    INSERT INTO book (title, description, quickDescription, author, coverImage, links, tags)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    'title_test',
    'description_test',
    'quick_description_test',
    'author_test',
    'https://hojunin.com',
    JSON.stringify({}),
    JSON.stringify({}),
  ];

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
