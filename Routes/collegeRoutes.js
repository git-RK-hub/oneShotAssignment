const router = require('express').Router();
const collegeController = require('../Controller/college');

// /?state=Punjab
// /?course=Computer Science
router
  .route('/')
  .get(collegeController.getAllColleges)
  .post(collegeController.createCollege);

router.post('/searchByName', collegeController.getCollege);
router.get('/collegeStats', collegeController.getCollegeStats);
router.get('/collegeCoursesStats', collegeController.getCollegeCoursesStats);
// router.get('/getCollegeByCourse', collegeController.getCollegeByCourse);
router.get('/:id/getSimilarColleges', collegeController.getSimilarColleges);
router.get('/:id', collegeController.getCollege);

module.exports = router;
