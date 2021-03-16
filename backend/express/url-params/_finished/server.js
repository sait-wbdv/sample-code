const path = require('path')
const express = require('express')
const index = require('./routes')

const app = express()
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/',index)

app.use((req, res) => {
  res.status(404)
  res.send('Custom 404: File Not Found')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})