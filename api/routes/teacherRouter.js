const express = require('express');
const router = express.Router();
const teacherService = require('../../service/teacherService');


router.get('/', async function (req, res) {
    res.send(await teacherService.findAll());
});

router.post('/', async function (req, res) {
    res.send(await teacherService.save(req.body));
});

router.get('/:id', async function (req, res) {
    res.send(await teacherService.findById(req.params.id));
});

router.delete('/:id', async function(req, res) {
    await teacherService.deleteOne(req.params.id);
    res.status(204).send();
});

router.put('/:id', async function (req, res) {
    res.send(await teacherService.update(req.params.id, req.body));
});

module.exports = router;