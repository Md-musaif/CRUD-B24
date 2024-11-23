const { signup } = require('../Controller/AuthController')
const {signupList} = require('../Controller/List')
const {signupByid} = require('../Controller/Byid')
const {signupDelete} = require('../Controller/Delete')
const {signupUpdate} = require('../Controller/Update')

const router = require('express').Router();

router.post('/signup', signup)
router.get('/list', signupList)
router.get('/:id', signupByid)
router.delete('/:id', signupDelete)
router.put('/:id', signupUpdate)

module.exports = router