const express = require('express');
const router = express.Router();

//route is relative to /about
router.get('/', (req, res) => res.send("About This App!"));
router.get('/me', (req, res) => res.send("About Me!"));

module.exports = router;