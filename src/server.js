const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(( res) => {
  return res.status(500).json({
    error: 'Internal Server Error',
    message: 'Erro interno!',
  })
});

app.listen(3000);
console.log('Listen port 3000')