require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'task_manager_db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  // Add test and production if needed
};

