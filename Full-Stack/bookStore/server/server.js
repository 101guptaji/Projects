const express = require("express");
const app = express();

require('./db/connection');

const bookRouter = require('./routes/bookRoutes');

app.use(express.json());

app.use('/api/books', bookRouter);

app.get("/", (req, res)=>{
    res.send("Server for book store is running");
})

const PORT = 8000;
app.listen(PORT, ()=>console.log("Server is running on port: ", PORT));