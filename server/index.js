const mysql = require('mysql');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Crear la conexión con la base de datos
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,   // Por ejemplo, 'localhost'
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar: ' + error.stack);
    return;
  }
  console.log('Conectado como ID ' + connection.threadId);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Consultar la base de datos para el usuario
  connection.query('SELECT * FROM usuarios WHERE correoElectronico = ?', [email], (error, results, fields) => {
    if (error) {
      // Manejar errores de la base de datos
      return res.status(500).send('Error en el servidor');
    }

    if (results.length === 0) {
      // Usuario no encontrado
      return res.status(401).send('Credenciales incorrectas');
    }

    const user = results[0];

    // Comparar la contraseña proporcionada con la almacenada
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        // Manejar error
        return res.status(500).send('Error en el servidor');
      }

      if (!isMatch) {
        // Contraseña no coincide
        return res.status(401).send('Credenciales incorrectas');
      }

      // Si la contraseña coincide, generar y devolver un token JWT
      const token = jwt.sign({ id: user.id, userType1: user.userType1 }, 'tu_secreto', { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

// Cerrar la conexión
connection.end();
