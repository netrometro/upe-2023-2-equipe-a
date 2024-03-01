
//express
const express = require('express')
const Routes = require('./routes')
const cors = require("cors");

const app = express()
app.use(cors())

app.use(express.json())
app.use(Routes)

app.listen(3333, () => console.log("Server runnig in 3333"))

app.get('/', (req, res) => {
  // 'res' is a valid response object here
  res.status(200).send('Hello, World!');
});

app.get("/saude", (req, res) => {
  return res.json("Up");
} )


//Envio de Email
const nodemailer = require('nodemailer');
require('dotenv').config();

const userEmail =process.env.ENDERECOEMAIL;
const passwordEmail = process.env.SENHAEMAIL;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userEmail,
    pass: passwordEmail,
  },
});

app.post('/enviar-email', async (req, res) => {
  const { destinatario, corpo } = req.body;

  const mailOptions = {
    from: userEmail,
    to: destinatario,
    subject: 'Compartilhamento de Questão',
    text: corpo,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar o e-mail.');
  }
});

