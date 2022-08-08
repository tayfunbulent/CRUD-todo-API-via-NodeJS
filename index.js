const express = require('express');
const router = require('./routes/todoRoute');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var app = express()

//connect to MongoDB
mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('MongoDB is working!'))
  .catch((err) => console.error(err));

app.get('/', function (req, res) {
    res.send('Use POSTMAN! http://localhost:5050/')
})

/* 
EX: C-> POST > http://localhost:5050/user/create
{
      "userName":"Test Example",
      "userMail":"test@example.com",
      "userComment":"Test Test Test"
}

EX: R-> GET > http://localhost:5050/user

EX: U-> PATCH > http://localhost:5050/user/ID
{
        "userName": "Test Example"
}

EX: D-> DELETE > http://localhost:5050/user/delete/ID
*/

app.use('/user', router)

app.listen(5050, function () {
    console.log('PORT:5050 is running.')
})
