const express = require('express');
const router = express.Router();
const commentService = require('../../service/commentService');


router.get('/', async function (req, res) {
    res.send(await commentService.findAll());
});

router.post('/', async function (req, res) {
    res.send(await commentService.save(req.body));
});

router.get('/:id', async function (req, res) {
    res.send(await commentService.findById(req.params.id));
});

router.delete('/:id', async function (req, res) {
    await commentService.deleteOne(req.params.id)
     res.status(204).send();
});

router.put('/:id', async function (req, res) {
    res.send(await commentService.update(req.params.id, req.body));
});

module.exports = router;