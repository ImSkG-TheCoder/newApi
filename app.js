const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("Public"));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/main.html");
})


app.listen(9000,function(){
    console.log("Your server is running fine,  Your server is running on port 9000");
})








