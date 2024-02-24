//Antonio Sereno 

//express
const express = require('express')

const app = express()

app.use(express.json())


//Rotas
app.listen(3333, () => console.log("Server runnig in 3333"))

app.get("/saude", (req, res) => {
  return res.json("Up");
} )


