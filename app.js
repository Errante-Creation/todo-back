const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT


// Importer la connexion mongoDB
require('./db')

// Middleware pour pouvoir parser le JSON
app.use(express.json())

// Intégrer les routes
const todosRoutes = require('./routes/todosRoutes')

app.use('/api/v1/todos', todosRoutes)

app.get('/', (req, res) => {
   res.send("Il n'y a rien à voir ici !")
})

app.listen(port, () => { console.log(`Serveur démarré sur http://localhost:${port}`) })