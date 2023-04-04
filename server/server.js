const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');


mongoose.connect(`mongodb+srv://timzhusolo:soloproj1@cluster0.duhi5hi.mongodb.net/?retryWrites=true&w=majority`); // your database string
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
const router = express.Router();

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
  });

app.get('/styles.css', (req, res)=>{
  res.setHeader('Content-Type', 'text/css')
  return res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css'))
})

app.get('/index.js', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.js'));
});

app.use('/*' ,(req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//Express global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

/* start server */
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
});

module.exports = app;