const express = require('express');

//Getting our routes
const router = require('express').Router();

const controller = require('../controllers/commentsController')

router.get('/comments/add', controller.add)
router.post('/comments/add', controller.save) 

router.get('/comments/edit/:comment_id', controller.edit)
router.post('/comments/edit/:comment_id', controller.update)


module.exports = router