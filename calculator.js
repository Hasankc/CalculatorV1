const express = require ("express");

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res){

    let num1 = Number(req.body.n1)
    let num2 = Number(req.body.n2)
    
     let result = num1 + num2;

        res.send("The result of the calculation is " + result);

})
app.listen(3000,function(){

})