const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/bookStore")
.then(()=>{
    console.log("Connected to Database");
})
.catch(err=>console.log("Error in connecting to DB: ", err));