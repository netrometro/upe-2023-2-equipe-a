const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Back de teste está funcionando' });
});

app.listen(5173, () => {
  console.log(Servidor backend rodando na porta 8080);
});