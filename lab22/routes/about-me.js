const express = require('express');
const router = express.Router();
const path = require('path');

const marianaController = require('../controllers/mariana');

router.get('/biografia', marianaController.get);


module.exports = router;