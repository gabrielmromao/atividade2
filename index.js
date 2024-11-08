const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Nome">
            <input type="email" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});


app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(Dados recebidos: Nome - ${name}, Email - ${email});
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(Servidor rodando em http://localhost:${PORT});
});