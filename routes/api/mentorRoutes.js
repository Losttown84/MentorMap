const router = require('express').Router();
const mentorController = require('../../controllers/mentorController');
const db = require('../../models');


router  
    .route('/api/mentors')
    .get(mentorController.findMentors)
    // .post(mentorController.saveMentor)
    
router  
    .route('/:id')
    .get(mentorController.findById)
    // .post(mentorController.findByIdAndUpate);

module.exports = router;