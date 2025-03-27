require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const authMiddleware = require('./middleware/auth')
const authRouter =require('./routes/authRoute') ; 
const urlRoutes = require('./routes/urlRoute');
const redirectRoute = require('./routes/redirectRoute');

const PORT = process.env.PORT || 3500;

connectDB();
app.use(cors());

app.get('/',(req,res)=> {
    res.send('Hello world!')
    console.log('someone clicked ')
})

app.use('/url', authMiddleware, urlRoutes); 

app.use('/redirect', redirectRoute); 



app.use('/auth', authRouter);


mongoose.connection.once('open', ()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
})
