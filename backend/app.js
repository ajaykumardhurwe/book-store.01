const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();



//middleware
app.use(express.json());
app.use(cors());
app.use("/books", router) // locallhost: 5000

mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.4eeb6.mongodb.net/bookStore?retryWrites=true&w=majority"
   // "mongodb+srv://admin:admin123@cluster0.1yspnot.mongodb.net/?retryWrites=true&w=majority"
 //   "mongodb+srv://admin:ZE4eOKxVPgWlucvh@cluster0.rejo7.mongodb.net/bookStore?retryWrites=true&w=majority"
//ZE4eOKxVPgWlucvh

//// // "mongodb+srv://admin:0hJQ6QHVZDge1pDf@cluster0.xxzspq4.mongodb.net/bookStore?retryWrites=true&w=majority"

).then(()=>console.log("Connected to the database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));




//0hJQ6QHVZDge1pDf