const express = require('express');

//Getting our routes
const router = require('express').Router();

const controller = require('../controllers/menusController')
router.get('/menu', controller.menu)

router.get('/menus/add', controller.add)
router.post('/menus/add', controller.save) 

router.get('/menus/edit/:menu_id', controller.edit)
router.post('/menus/edit/:menu_id', controller.update)

router.get('/menus/delete/:menu_id', controller.getDelete)
router.post('/menus/delete/:menu_id', controller.postDelete)

module.exports = router;