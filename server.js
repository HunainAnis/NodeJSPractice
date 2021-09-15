const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/Bootcamps')
const morgan = require('morgan')
// LOAD ENV VARIABLES
dotenv.config({ path: './config/config.env'});

const app = express();

//Using Logger
if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
}
// Mount Routes
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));