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
