const {login} = require('../controllers/login');
const {getCharById} = require('../controllers/getCharById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');

const router = require('express').Router();


router.get('/character/:id', getCharById);

router.get('/login', login );

router.post('/favorites', postFav);

router.delete('/favorites/:id', deleteFav);

module.exports = router;