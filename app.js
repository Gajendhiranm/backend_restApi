const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const postRouter = require('./routes/post')

app.use(cors())
app.use(bodyParser.json())

app.use('/posts',postRouter);

//routes
app.get("/",(req,res) => {
    res.send("Home page")
})


//testdb // testdb1234

mongoose.connect(
    process.env.DB_CONNECTION, {
    "useUnifiedTopology":true,
    "useCreateIndex":true,
    "useNewUrlParser":true,
    "useFindAndModify":false,
  } , ()=>{
    console.log("database is connected 🔥🔥🔥🔥🔥!!!!")
  })
app.listen(4000);