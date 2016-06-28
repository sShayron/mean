var express = require('express');
var load = require('express-load');

module.exports = function(){
  const app = express();
  app.set('port', 3000);  //Ambiente
  app.use(express.static('./public')); //Middleware
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
