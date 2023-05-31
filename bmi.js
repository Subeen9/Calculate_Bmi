const express = require('express')
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmi.html")
})
app.post("/", function(req, res){
    var height =Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi =  Math.round(weight/Math.pow(height,2)*100)/100;
    if(bmi<=18.5){
        res.send("Your Bmi is" + bmi + "You are underweight");
    }
   else if(bmi>=18.5 && bmi<=24.5){
    res.send("Your Bmi is " + bmi + " You have a normal weight")
   }
   else if(bmi>=25 && bmi<=29.9){
    res.send("Your Bmi is " + bmi + " You  have a overweight")
   }
   else{
    res.send("Your Bmi is " + bmi + " You have an obesity")
   }
})
app.listen(port , function(){
    console.log("Server is started on port " + port)
})