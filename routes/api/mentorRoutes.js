const router = require('express').Router();
const mentorController = require('../../controllers/mentorController');
const db = require('../../models');


router  
    .get('/api/mentor', mentorController.findMentors)

router
    .get('/api/mentor/:id', mentorController.findById)    
    
router  
    .get('/api/mentee', mentorController.findMentee)
    
router 
    .get('/api/mentee/:id', mentorController.findById)
    

module.exports = router;