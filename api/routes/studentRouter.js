const express = require('express');
const router = express.Router();
const studentService = require('../../service/studentService');


router.get('/', async function (req, res) {
    res.send(await studentService.findAll());
});

router.post('/', async function (req, res) {
    res.send(await studentService.save(req.body));
});

router.get('/:id', async function (req, res) {
    res.send(await studentService.findById(req.params.id));
});

router.delete('/:id', async function(req, res) {
    await studentService.deleteOne(req.params.id);
    res.status(204).send();
});

router.put('/:id', async function (req, res) {
    res.send(await studentService.update(req.params.id, req.body));
});

module.exports = router;