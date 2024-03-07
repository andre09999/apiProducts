const express = require('express');
const validateToken = require('../middlewares/Token');
const postController = require('../controllers/ProductController');
const validateProduct = require('../middlewares/validaçãoDeDados');

const router = express.Router();


router.post('/', validateToken , validateProduct, postController.created);

router.get('/:id', postController.ReadOne);

router.post('/login', postController.Read);

router.put('/:id', validateToken, validateProduct, postController.update);

router.delete('/:id', validateToken,  postController.Delete);

module.exports = router;
