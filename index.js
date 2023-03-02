const express = require('express');
const multer = require('multer');
const app = express();

// const mongoose = require('mongoose');

// const User = require('./models/users');

// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();

// mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);

// mongoose.connect(
//   'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/tutorial?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
  })
}).single("user_file");

app.post('/upload', upload, (req, resp) => {
  resp.send('file uploaded')
});

app.listen(5000);
console.log(1)