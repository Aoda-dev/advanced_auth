const express = require('express');
const router = express.Router();
const { getPrivatData } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getPrivatData);

module.exports = router;
