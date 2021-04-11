const config = require('config');
const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  const token = req.header('x-auth-token');

  // Проверим есть ли токен
  if (!token) {
    return res.status(401).json({ msg: 'Токена нет, авторизация отклонена' });
  }

  // Проверим токен
  const decoded = jwt.verify(token, config.get('jwtSecret'));
  try {
    // добавим токен к пользователю
    req.user = decoded;
    next();
  } catch {
    (error) => {
      return res.status(400).json({ msg: 'Токен не верен' });
    };
  }
}

module.exports = authentication;
