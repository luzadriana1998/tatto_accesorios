const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicializamos el express
const app = express();

//configuración
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs');

//Rutas
app.use(require('./routes/routes'));

//Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//Inializamos nuestro servidor
app.listen(app.get('port'), () => {
    console.log('server is runing on port', app.get('port'));
})