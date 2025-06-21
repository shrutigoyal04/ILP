const express = require("express");
const app = express()    
// console.dir(app)

// ports are logical endpoints of a network connection that is used to exchange information between a web server and a web client
let port = 3000  //8080

app.listen(port,()=>{
console.log(`app is listening on port ${port}`)
})

// app.use((req,res)=>{
//     // console.log(req)
//     console.log("request received")
    // res.send("this is the basic response")
    // res.send({
    //     name:"apple",
    //     color:"red"
    // })
//     let code = "<h1>Fruits<h1/><ul><li>Apple</li><li>Banana</li></ul>"
//     res.send(code)
// })


///////routing 
// it is the process of selecting a path for traffic in a network or between networks


// app.get("/",(req,res)=>{
//     res.send("This is the home page")
// })

// app.get("/apple",(req,res)=>{
//     res.send("you have requested for apple")
// })

// app.get("/orange",(req,res)=>{
//     res.send("you have requested for orange")
// })

// app.get("*",(req,res)=>{            
//     res.send("This path does not exist")
// })

// app.all(/.*/, (req, res, next) => {
//     res.send("This path does not exists") ;
//   });

// app.post("/",(req,res)=>{
//     res.send("This is post response")
// })

app.get("/",(req,res)=>{
    res.send("This is the home page")
})
app.get("/:username/:id",(req,res)=>{
    let {username ,id}=req.params
    htmlStr = `<h1>Welcome ${username}</h1><p>Your id is ${id}</p>`
    res.send(htmlStr)
    // res.send(`welcome ${username} your id is ${id}`)
})

app.get ("/search",( req, res) => {
    let {q} =req.query 
    if (!q) {
        res.send("please enter a search term")
    }
    res.send(`you have searched for ${q}`)   // http://localhost:3000/search?q=apple
})


/////EJS [embedded javascript template]
//it is a simple templating language that lets you generate HTML markup with plain JavaScript 