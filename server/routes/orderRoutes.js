const express = require('express');

//Getting our routes
const router = require('express').Router();

const controller = require('../controllers/ordersController')

router.get('/order', controller.order)

router.get('/orders/add/:menu_id', controller.add)
router.post('/orders/add/:menu_id', controller.save)

router.get('/orders/edit/:menu_id', controller.edit)
router.post('/orders/edit/:menu_id', controller.update)

module.exports = router