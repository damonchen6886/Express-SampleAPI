
const express = require("express");
const app = express();
app.use(express.json());
const peopleRoutes = require("../routes/api");
app.use("/api", peopleRoutes);
// const mysqlConnection = require("../connection");

var user = [];
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.post("/", (req, res) =>{
    res.json({test:"test1"});
    // res.send("hello word1");

});

// app.post("/",(req, res)=>{
//     res.send("post -> heelo word!!")
// })

// app.post("/api/register",(req, res)=>{
//     console.log(req.body)
    
//     if(user.some(e=> e.name == req.body.name )){
//         // res.send("register failed, already have this user!!!!!!!!!!!!!!!!!!")
//         res.json({
//             name: req.body.name,
//             password:"********",
//             status: "failed!",
//             message:"register failed, already have this user!!"
//         });
//         console.log(user);
//         return;
//     }
//     else {
//         user.push({
//         name: req.body.name,
//         password : req.body.password
//         })
//         res.json({
//             name: req.body.name,
//             password: "********",
//             status: "success!",
//             message:"successfully registered user"
//         });
//         console.log(user);
//     }
    
// })

// app.post("/api/login",(req, res)=>{
//     // req = qs.stringify(req);
//     // console.log(req.body + " "+req.body.password)
//     // var requests = JSON.stringify(req.body)
//     // console.log(requests)
//     if(user.some(e=> e.name == req.body.name && e.password == req.body.password)){
//         res.json({
//             name: req.body.name,
//             password: "********",
//             status: "success!",
//             message:"successfully logedin user"
//         });
//         // res.send("login success!!!!!!!!!!!!!!!!")
       
//         console.log(user)
//         return;
//     }
//     else{
//         res.json({
//             name: req.body.name,
//             password: "********",
//             status: "failed!",
//             message:"user dost not exists!!!!!!!!!!!!!!"
//         });
//         // res.send("user dost not exists!!!!!!!!!!!!!!")
//         console.log("##########")
//         console.log(user)
//         // console.log(req)
//         // console.log(req.body)
//         // console.log(req.body.username)
//         // console.log("##########")
//     }
   

// })








app.listen("8014", () =>{
    console.log("server started")
    // console.log(user)
});


// start: node server.js