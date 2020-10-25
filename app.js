const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors')
const cors = require('cors')

// Local Middlewares
const appError = require('./middlewares/error');
const connectDB = require('./config/db')




// Routes
const auth = require('./routes/authRoutes');


// Load env variables
dotenv.config({path: './config/config.env'});

// connect db
connectDB()

// Init app
const app = express()

// Middlewares
app.use(cors());

// Body parser
app.use(express.json({ extended: true }));

// Dev Logging middle
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Routes
app.use('/api/v1/auth', auth);


app.get('/', (req, res) => {
    res.send('api runinng')
})


app.use(appError)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})

// Handle unhandle promise rejection
process.on('unhanledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    // Close server and exit process
    server.close(() => process.exit(1))
})