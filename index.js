const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./config/config');
const taskRoutes = require('./routes/tasks');

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/tasks', taskRoutes);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:8080`);
});






;

