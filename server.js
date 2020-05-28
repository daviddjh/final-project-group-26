 var port_number = 3000;
 if(process.env.PORT){
     port_number = process.env.PORT;
 }

 const express = require('express');
 const app = express();
 const port = port_number;

 app.use(express.static(__dirname + "/public"));

 app.get('/', function(req, res, next){
   res.status(200).sendFile(__dirname + "/public/index.html");
 });

 app.get('*', function(req, res, next) {
     res.status(404).sendFile(__dirname + "/public/404.html");
 });

app.listen(port, () => console.log('listening on port ${port}'))
