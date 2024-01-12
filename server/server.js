// En server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send('API funcionando');
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));