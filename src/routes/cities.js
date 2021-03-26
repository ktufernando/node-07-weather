const { Router } = require('express');
const {
    cities 
} = require('../controllers/cities');

const router = Router();

router.get('/:city', cities);

module.exports = router;