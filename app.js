import express from "express";
import cors from 'cors';
//Importamos la conexion de la BD
import db from './database/db.js';
//Importamos nuestro enrutador
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors())
app.use(express.json())

//Blog
app.use('/blogs', blogRoutes)

try {
    db.authenticate()
    console.log("Conexion exitosa la BD")
    
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

/*  app.get('/', (req, res)=>{
    res.send('HOLA')
})  */

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000')
})