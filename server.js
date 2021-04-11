const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Обработка POST запросов.
// urlencoded.

app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// DB Config
const db = config.get('mymongoURI');

// connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected ...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/data', require('./routes/api/datadata')); // перенаправление на другой маршрут
app.use('/api/users', require('./routes/api/users')); // перенаправление на другой маршрут
app.use('/api/auth', require('./routes/api/auth')); // перенаправление на другой маршрут

// только для PRODUCTION ===>>>
if (process.env.NODE_ENV === 'production') {
  // подключаем в  STATIC  папку BUILD
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  })
}
// <<<=== только для PRODUCTION

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
