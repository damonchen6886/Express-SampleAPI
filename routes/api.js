const express = require("express");
const Router  = express.Router();
var bodyParser = require('body-parser');
Router.use(bodyParser.urlencoded({extended: false}));
const mysqlConnection = require("../db/connection.js");
var temdata = require("../db/data.js");
var url = require("url");

Router.post("/", (req,res)=>{
    console.log(req.body);
    var qry = "select * from users ";
    mysqlConnection.query(qry, (err, rows, fields)=>{
        if(!err){
           
            console.log(rows)
             res.send(rows);
             return;
        }
        else{
            console.log(err);
            res.send("error")
            return;
        }
    })
})


Router.post("/login", (req,res)=>{
    var name = req.body.name;
    var password = req.body.password;
    var sql = `select * from users where name = "${name}" and password = "${password}";`;
    var paramsArr = [name,password];
    console.log(req.body);
    console.log(name);
    console.log(password);
    console.log(sql);
    mysqlConnection.query(sql,(err,data)=>{
        if(data[0]){           
            // console.log(data[0])
            res.json({
                name: data[0],
                password: "********",
                status: "success!",
                message:"successfully logedin user"
            });
             return;
        }
        else {
            // console.log(data)
            res.json({
                name: data[0],
                password: "********",
                status: "failed!",
                message:"user dost not exists!!!!!!!!!!!!!!"
            });
            return;
        }
    })
})

Router.post("/register", (req,res)=>{
    var name = req.body.name;
    var password = req.body.password;
    var sql = `INSERT IGNORE INTO users (name, password) VALUES ('${name}', '${password}');`

    mysqlConnection.query(sql,(data)=>{
        if(name && password){           
            // console.log(data[0])
            res.json({
                name: name,
                password: "********",
                status: "success!",
                message:"successfully registered user"
            });
             return;
        }
        else {
            // console.log(data)
            res.json({
                name: data[0],
                password: "********",
                status: "failed!",
                message:"register failed, already have this user!!"
            });
            return;
        }
    })
})

// gengrate tep data from given file
Router.get("/message", (req, res)=>{
    var username = url.parse(req.url, true).query.name;
    console.log(username)
    //receive data
    res.json(temdata.message);

})


// Router.post("/name2", (req,res)=>{
//     var name = req.body.name;
//     var password = req.body.password;
    
//     var sql2 = "select * from users where name = ? and password = ?";
//     var paramsArr = [name,password];
//     console.log(req.body);
//     console.log(name);
//     console.log(password);
//     // console.log(sql);
//     mysqlConnection.query(sql2,paramsArr,(data)=>{
//         if(name && password){           
//             // console.log(data[0])
//             res.json({
//                 name: data[0],
//                 password: "********",
//                 status: "success!",
//                 message:"successfully logedin user"
//             });
//              return;
//         }
//         else {
//             // console.log(data)
//             res.json({
//                 name: data[0],
//                 password: "********",
//                 status: "failed!",
//                 message:"user dost not exists!!!!!!!!!!!!!!"
//             });
//             return;
//         }
//     })
// })



module.exports =Router;