const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const movies = require('./routes/movies');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //database configuration
var jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;
app.set('secretKey', 'nodeRestApi'); // jwt secret token
require('dotenv').config(); //for accessing env files  



//for successful connection 
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err))
app.get('/', (req, res) => {
  res.send('Database is now connected now do other')
})
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.get('/home', function (req, res) {
  res.json({ "Name": "Build APIs" });
});
// public route
app.use('/users', users);
// private route
app.use('/movies', validateUser, movies);
app.get('/favicon.ico', function (req, res) {
  res.sendStatus(204);
});
function validateUser(req, res, next) {
  console.log("access-Token in movies server ==>", req.headers['x-access-token']);   //for accessing tokens in the front-end validation
  // console.log("respond in movies server==>", res)
  console.log(" secretKey in movies server ==>", req.app.get('secretKey'));
  // console.log("JWT is ==>", jwt);
  console.log("Schema created in server==>", req.body.movieName, req.body.releaseDate);

  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      res.json({ status: "Error in authentication", message: err.message, data: null });
    } else {
      // add user id to request
      // req.body.userId = decoded.id;
      next();
    }
  });

}

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Node server listening on port http://localhost:${port}`);
});
