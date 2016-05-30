const express = require('express');
const home = require('../app/routes/home');

module.exports = function(){
  const app = express();
  app.set('port', 3000);  //Ambiente
  app.use(express.static('./public')); //Middleware
  home(app);
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
};
