const express = require('express');
const mongoose = require('mongoose');

const dataroute = require('./routes/api/datadata');

const app = express();

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected ...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/data', dataroute); // перенаправление на другой маршрут

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
