const express = require('express');
const app = express();
const port = 3000;
const connectdb = require ("./config/connectdb");


require("dotenv").config()
connectdb()
app.use(express.json())
app.use("/api/user",require("./routes/userRoute"))








app.listen(port, (err) => {
    err? console.log(err): console.log("Server is running at localhost 3000");
  });