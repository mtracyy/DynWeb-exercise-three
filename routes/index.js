const express = require('express');
const router = express.Router();

//(req, res) is (request, response)
router.get('/', (req, res) => res.send("Cool Call"));

module.exports = router;