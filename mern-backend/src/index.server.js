const express = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user')

//Libreria dotenv para leer las variables de entorno
env.config()

//Mongo conection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@lalidb.ggh8z.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(() => console.log('DataBase connected'))

//Para leer la info que mando en JSON instalo body-parser
app.use(bodyParser())

app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})