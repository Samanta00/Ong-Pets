// const express=require('express')
// const app=express()
// const PORT=9091
// const mysql=require('mysql')

// const connection=mysql.createConnection(
//     {
//         host:'localhost',
//         user:'ellen',
//         password:'ElS895623!',
//         database:'cadastrodoguinho'
//     }
// )

// connection.connect();
 
// connection.query('SELECT * FROM user', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
 
// connection.end();


// app.get("/", function(req,res){
//     res.sendFile(__dirname+ "/src/index.html")
  
// })

// app.get('/login', function(req,res){
//     res.sendFile(__dirname+ "/src/cadastro.html")
// })

// app.get('/adoacao', function(req,res){
//     res.sendFile(__dirname+ "/src/adore.html")
// })

// app.get("/pix", function (req,res){
//     res.sendFile(__dirname+"")
// })

// app.listen(PORT,()=>{
//     console.log(`O servidor está pegando na em: http://localhost:${PORT}/`)
// })