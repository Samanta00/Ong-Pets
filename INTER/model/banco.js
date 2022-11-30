const mysql=require('mysql')

const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'ellen',
        password:'ElS895623!',
        database:'cadastrodoguinho'
    }
)

connection.connect();
 
connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();