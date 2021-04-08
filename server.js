const express = require('express');
const path = require('path');
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
