const express = require('express')
const router = express.Router()

// Importer le controleur
const todosController = require('../controllers/todosController')

// Création des routes
router.get('/', todosController.getAllTodos)
router.get('/:id', todosController.getOneTodo)
router.post('/', todosController.createTodo)
router.patch('/:id', todosController.updateTodo)
router.delete('/:id', todosController.deleteTodo)

module.exports = router