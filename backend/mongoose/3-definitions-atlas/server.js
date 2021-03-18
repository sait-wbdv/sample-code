const dotenv = require('dotenv').config();
const express = require('express');
const api = require('./routes/api-v0');

const app = express();

app.use(express.static('./public'));
app.use('/api/v0', api);

app.use((req, res) => {
  res.sendStatus(404);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})