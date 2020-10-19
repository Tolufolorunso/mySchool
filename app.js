const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')


// Load env variables
dotenv.config({path: './config/config.env'});

// connect db
connectDB()

// Init app
const app = express()

// Dev Logging middle
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.send('api runinng')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})