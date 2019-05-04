const router = require('express').Router();
const mentorRoutes = require('./mentorRoutes');

router.use('/mentors', mentorRoutes);

module.exports = router;
