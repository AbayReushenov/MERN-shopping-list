npm init
npm i express mongoose concurrently
npm i -D nodemon
// client
npm i -g create-react-app
npx create-react-app .
npm i bootstrap reactstrap uuid react-transition-group
// https://reactstrap.github.io/components/listgroup/
npm i redux react-redux redux-thunk 
npm i axios

// server подготовка к deploy
 npm i path


 /home/abay/MERN/mern_shopping_list/server.js
--------------------------------------------------------------------------------------
package.json =>
 "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

server.js ==>
const path = require('path');
// только для PRODUCTION ===>>>
if (process.env.NODE_ENV === 'production') {
  // подключаем в  STATIC  папку BUILD
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  })
}
// <<<=== только для PRODUCTION

install heroku cli
sudo snap install --classic heroku
heroku login
-> подтвердить в приложении
создаем приложение
heroku create
==================
$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a glacial-hamlet-65047

$ git add .
$ git commit -am "make it better"
$ git push heroku master

To https://git.heroku.com/glacial-hamlet-65047.git
 * [new branch]      master -> master
/////////////////////////////////-----------------------
npm i bcryptjs
npm i jsonwebtoken
npm i config

create /home/abay/MERN/mern_shopping_list/config/default.json
// DB Config
const config = require('config');
const db = config.get('mymongoURI');

https://jwt.io/

postman:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzE3MzMxMDQyNjgwMzRiMWE5YmM3OCIsImlhdCI6MTYxODA0Nzc5NCwiZXhwIjoxNjE4MDUxMzk0fQ.cATUihljalm2ICJaoU4E99ZPzUG_eDihpVTmt_LboBY",
    "user": {
        "id": "6071733104268034b1a9bc78",
        "name": "Fanny Exlibris",
        "email": "funny.exlibris@gmail.com"
    }
}

token:
{
  "id": "6071733104268034b1a9bc78",
  "iat": 1618047794,
  "exp": 1618051394
}
 Atlas
 : {

_id
:
6071733104268034b1a9bc78
name
:
"Fanny Exlibris"
email
:
"funny.exlibris@gmail.com"
password
:
"$2a$10$ndF546OSKR2OXn6u87Zx7.xuBTO69tOwtIZ4/lXM830E9E97EbvMW"
register_date
:
2021-04-10T09:43:13.909+00:00
 }

{atlas.id === token.id === 6071733104268034b1a9bc78}
