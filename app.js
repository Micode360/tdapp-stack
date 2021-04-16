const express = require('express');
const app = express();
const cors = require('cors')
const mainBase = require('./config/db');

mainBase();
require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }));


//routes
app.use('/api/users', require('./routes/user'));
app.use('/register', require('./routes/auth'));

app.get('/message', (req , res)=> {
    res.json({message: "Server is alive"})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
