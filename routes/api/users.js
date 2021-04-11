const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User MODEL
const User = require('../../models/User');

// @route  GET api/users
// @desc   Register new user
// @access Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  // проверка на заполнение всех полей
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Пожалуйста, заполните все поля.' });
  }
  // проверка в базе существует ли данный email
  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ msg: 'Данный пользователь уже зарегистрирован.' });
    }
    // создаем запись нового пользователя
    const newUser = new User({
      name,
      email,
      password,
    });

    // создадим параметры  bcrypt salt &  hash
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        // Store hash in your password DB.
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          // создаем токен
          jwt.sign(
            { id: user._id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              return res.json({
                token: token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
