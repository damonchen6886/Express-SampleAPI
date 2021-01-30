const  mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'awsexpressreact.c4apyinoayut.us-east-2.rds.amazonaws.com',
    port:'3306',
    user: 'chen',
    password: '',
    database: 'awsdbreact',
  //   insecureAuth : true
  })
  
  connection.connect((err)=>{
      if(!err){
          console.log("connected")
      }
      else{
          console.log('error connecting: ' + err.stack)
      }
  })

  module.exports = connection;