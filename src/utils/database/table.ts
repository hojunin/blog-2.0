import handleDataBase from '.';

const createTables = async () => {
  const connection = await handleDataBase();

  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS test (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table: ' + err.message);
    } else {
      console.log('Table created successfully');
    }
  });
};

createTables();
