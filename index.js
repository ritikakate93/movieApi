const express = require('express');
const dotenv = require('dotenv');


const connectDB = require('./database/config');

const app = express();
dotenv.config({path:`.env`});
const PORT = process.env.PORT || 8080

// mongodb connection
connectDB();

app.use(express.json()); // For JSON requests
app.use(express.urlencoded({ extended: true })); 


app.use('/movies',require('./routes/movieRoute'))
app.use('/search',require('./routes/browseRoute'))


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})


