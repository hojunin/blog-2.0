import { createConnection } from 'mysql2';

const handleDataBase = async () => {
  const connection = createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    port: Number(process.env.DATABASE_PORT),
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  connection.connect();
  return connection;
};

export default handleDataBase;
