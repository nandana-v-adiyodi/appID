const express = require("express");
const app = new express();
const cors = require("cors");
const jwt = require("jsonwebtoken")
const path = require('path');
const PORT = process.env.PORT || 5000

const studentid = require("./src/model/student-apply.js")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware Fuction to verify Token send from FrontEnd
function verifyToken(req,res,next){

  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  var token = req.headers.authorization.split(' ')[1];
 
 console.log(token)
 if(token == "null"){
     return res.status(401).send("Unauthorized Access")
 }

 var payload= jwt.verify(token , "secretkey")
 console.log(payload)
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 }


 app.get("/" , (_req,res)=>{
  res.send(`Serve Running on PORT ${PORT}`)
});


app.post("/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  
  console.log(req.body)

  

var data ={
  name:req.body.data.name,
  email:req.body.data.email,
  phone:req.body.data.phone,
  photo:req.body.data.photo,
  course:req.body.data.course,
  batch:req.body.data.batch,
  startDate:req.body.data.startDate,
  endDate:req.body.data.endDate,
 status: "Pending",
   
}

var data = new studentid(data);
data.save();

});







 app.listen( PORT , (_req,_res)=>{
     console.log(`Server Running on PORT ${PORT}`)
 })