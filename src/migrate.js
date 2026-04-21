const db = require('./db');

async function migrate() {
  const createTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  `;

  await db.query(createTable);
  console.log('Migration finished');
  process.exit(0);
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
