const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/Bootcamps')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')

// LOAD ENV VARIABLES
dotenv.config({ path: './config/config.env'});

// Connect to DB
connectDB()

const app = express();

//Body Parser
app.use(express.json())

//Using Logger
if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
}
// Mount Routes
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT || 5000

 const server = app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

 process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`.red)
    server.close(()=>process.exit(1))
 })