const { Router } = require('express');
const {
    weatherByCoordinates,
    weatherByCityId
} = require('../controllers/weather');

const router = Router();

router.get('/', weatherByCoordinates);
router.get('/:city/:id', weatherByCityId);

module.exports = router;