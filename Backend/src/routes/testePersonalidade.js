const express = require('express');
const { submitResponses } = require('../controllers/testePersonalidadeController');

const router = express.Router();

router.post('/submit', submitResponses);

module.exports = router;
