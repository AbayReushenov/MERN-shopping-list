const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const authentication = require('../../middleware/auth');

// User MODEL
const User = require('../../models/User');

// @route  POST api/auth
// @desc   Authentication user
// @access Public
router.post('/', (req, res) => {
  const { email, password } = req.body;
  // проверка на заполнение всех полей
  if (!email || !password) {
    return res.status(400).json({ msg: 'Пожалуйста, заполните все поля.' });
  }
  // проверка в базе существует ли данный email
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: 'Такого пользователя нет' });
    }

    // Проверка пароля пользователя
    bcrypt.compare(password, user.password).then((isOk) => {
      if (!isOk)
        return res.status(400).json({ msg: 'Вы ввели неверный пароль' });
      // isOk === true
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

// @route  GET api/auth/user
// @desc   Get user data
// @access Private

router.get('/user', authentication, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
    // отправляем данные пользователя за вычетом PASSWORD
});

module.exports = router;
