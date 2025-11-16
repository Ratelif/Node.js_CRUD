import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: '',
database: 'nodejs_crud',
waitForConnections: true,
connectionLimit: 10
});


try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connection OK");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection FAILED:");
    console.error(err);
  }

