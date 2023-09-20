import handleDataBase from '.';

export const createTables = async () => {
  const connection = await handleDataBase();

  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS feed (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
