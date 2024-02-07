const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { checkLogin } = require('../utils/checkLogin');

router.post('/users',userController.createUser);
router.get('/getData',checkLogin,userController.getUserData);
router.put('/editData',userController.updateUser);
// router.delete('/deleteData',userController.deleteUser)

module.exports = router;