const express = require('express');

//Getting our routes
const router = require('express').Router();

const controller = require('../controllers/pagesController')
router.get('/', controller.home)

router.get('/about', controller.about)


router.get('/contact', controller.contact)

module.exports = router