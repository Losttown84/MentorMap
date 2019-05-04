const router = require('express').Router();
const mentorController = require('../../controllers/mentorController');

// match /api/mentors
router  
    .route('/')
    .get(mentorController.findAll)
    .post(mentorController.saveMentor);

router  
    .route('/:id')
    .get(mentorController.findById)
    .post(mentorController.deleteMentor);

module.exports = router;