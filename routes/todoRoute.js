const express = require('express')
var router = express()
const create = require('../controller/todoController')
const view = require('../controller/todoController')
const update = require('../controller/todoController')
const remove = require('../controller/todoController')
const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.post('/create', create.create)
router.get('/', view.view)
router.patch('/:id', update.update)
router.delete('/delete/:id', remove.remove)


module.exports = router