const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// app.use((req,res,next)=>{
//     console.log("Hi i am 1st middleware");
//     // res.send("middleware finished");
//     next();
//     console.log("This is after next")
// })

// app.use((req,res,next)=>{
//     console.log("Hi i am 2nd middleware");
//     next();
// })

//logger-->to print useful information
// app.use((req,res,next)=>{
//     req.time= new Date (Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

//middlewaqre for specific path
// app.use("/random",(req,res,next)=>{
//     console.log("I m only for random");
//     next();
// })

//Page 404
// app.use((req,res,next)=>{
//     res.status(404).send("page not found");
// })

// ///Authentication
// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     else{
//       res.send("ACCESS DENIED");
//     }
// })

///pass token as function
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi i m root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin denied")
})

app.use((err, req, res, next) => {
  //   console.log("-----ERROR-------");
  //   next(err); 
  let { status=500, message="some error occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening");
});
