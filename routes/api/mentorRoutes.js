const router = require('express').Router();
const mentorController = require('../../controllers/mentorController');

// match /api/mentors
router  
    .router('/api/mentors')
    .get(mentorController.findAll)
    .post(mentorController.saveMentor)
router  
    .route('/:id')
    .get(mentorController.findById)
    .post(mentorController.findByIdAndUpate);

module.exports = router;