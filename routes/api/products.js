var express = require('express');
var router = express.Router();
const {
    readProducts,
    createProduct,
    upsertProduct,
    updateProduct,
    deleteProduct
    } = require('../../data/products');
const products = require('../../data/products');

/* GET product listing. */
router.get('/', (req, res, next) => {
    readProducts().then(data => {
      res.send(data);
    });
});

/* POST Product creation.*/
router.post('/', (req, res, next) => {
    const body = req.body;
    createProduct(body).then(data => {
        res.send(data);
    });
});

/* PUT Product creation.*/
router.put('/:id', (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    upsertProduct(id, body).then(data => {
        res.send(data);
    });
});
/* PATCH Product creation.*/
router.patch('/:id', (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    updateProduct(id, body).then(data => {
        res.send(data);
    });
});
/*DELETE to remove a user.*/
router.delete('/:id', (req, res, next) => {
    deleteProduct(req.params.id).then(data => {
        res.send(data)
    });
});

module.exports = router;
