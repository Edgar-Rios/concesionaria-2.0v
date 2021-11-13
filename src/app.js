let express = require('express');
const app = express();
const path = require('path');
//puerto del servidor
const PORT = 3333;
//enturatores
let indexRouter = require('./routes/indexRouter')
let marcasRouter  = require('./routes/marcasRouter')
let sucursalesRouter = require('./routes/sucursalesRouter')
let autosRouter = require('./routes/autosRouter')

/* configuracion para EJS */
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

/* configuracion de ruta public */
app.use(express.static(path.join(__dirname, '../public')));



/* enlazamiento de rutas */
app.use('/', indexRouter)
app.use('/marcas', marcasRouter)
app.use('/sucursales', sucursalesRouter)
app.use('/autos', autosRouter)

/* app.get('/', (request, response) => {
    response.send('estas en la ruta principal..Hello World!')
})*/

app.listen(PORT, () => console.log(`servidor levantado http://localhost:${PORT}`))




/*   CODIGO DE JONAA */
/* let express = require('express')
let app = express()
const PORT = 3333

/* Enrutadores 
let indexRouter = require('./routes/indexRouter')
let marcasRouter = require('./routes/marcasRouter')

app.use('/', indexRouter)
app.use('/marcas', marcasRouter)


app.listen(PORT, () => console.log("Servidor levantado"))
 */