const express = require('express')
const appRoute = require('./routes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', appRoute);

app.listen(port, function(req, res) {
    console.log(`Server aktif dengan port ${port}`)
})

