const express = require('express');
const port = 3000;
const taskRouter = require('./src/routes/tasks');
const db = require('./config/db');

const app = express();
app.use(express.json()); // Parses application/json

// Task routes (fetches from MySQL database)
app.use('/tasks', taskRouter);




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});