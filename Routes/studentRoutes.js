const router = require('express').Router();
const studentController = require('../Controller/student');

router.post('/', studentController.getAllStudentsOfCllg);

router.get('/:id', studentController.getStudentById);

module.exports = router;
