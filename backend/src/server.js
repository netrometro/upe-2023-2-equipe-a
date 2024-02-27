
//express
const express = require('express')
const app = express()
app.use(express.json())

//Rotas
const Routes = require('./routes')
app.use(Routes)

//cors
const cors = require("cors");
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.listen(3333, () => console.log("Server runnig in 3333"))

app.get('/', (req, res) => {
  // 'res' is a valid response object here
  res.status(200).send('Hello, World!');
});

app.get("/saude", (req, res) => {
  return res.json("Up");
} )


