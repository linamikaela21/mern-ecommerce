const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose')
//const path = require('path')
const cors = require('cors')

const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const initialDataRoutes = require('./routes/admin/initialData')
const pageRoutes = require('./routes/admin/page')

//Libreria dotenv para leer las variables de entorno
env.config()

//Mongo conection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@lalidb.ggh8z.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(() => console.log('DataBase connected'))


//Para leer la info que mando en JSON instalo body-parser
app.use(express.json())
//app.use('public', express.static(path.join(__dirname, 'uploads')))

//Para obtener Authorizacion para ingresar
app.use(cors())

// app.use((req,res,next) =>  {
//     console.log('req', req)
//     console.log('req.body', req.body)
//     console.log('req.headers', req.headers)
//     next()
// })

app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.use('/api', initialDataRoutes)
app.use('/api', pageRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})