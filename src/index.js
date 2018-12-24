const express     = require("express");
const morgan      = require("morgan");
const bodyParser  = require("body-parser");
const path        = require("path");
const app         = express();
const indexRoutes = require('./routes/routes.js');
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middlewares

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));

//Routes

app.use('/', indexRoutes);


app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
