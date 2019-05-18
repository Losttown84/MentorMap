const router = require('express').Router();
const mentorController = require('../../controllers/mentorController');
const sessionController = require('../../controllers/sessionController');
const passport = require('../../passport');
const db = require('../../models');

// mentor routes
router 
    .route('/mentor')
    .get(mentorController.findMentors)
    .post(mentorController)

router
    .route('/mentor/:id')
    .get(mentorController.findById)    
    
router  
    .get('/mentee', mentorController.findMentee)
    
router 
    .get('/mentee/:id', mentorController.findById)

// session routing
router 
    .route('/createsession')
    .post(sessionController.createSession)   
    .get(sessionController.findSession)

router
    .post('/contact', (req, res) => {
            db.Contact.create({
                fullName: req.body.fullName,
                email: req.body.email,
                message: req.body.message
            })
            .then(contact => res.json(contact))
            .catch(err => res.status(422).json(err));
        }) 



// login/auth routes
router
    .post('/signup', (req, res) => {
        console.log('user signup');
    
    
        const { username, password } = req.body
        //const username = 'tom@tom.com'
        //const password = '123456ABC'
        
        // ADD VALIDATION
        db.User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new User({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        })
    })
    
    router.post(
        '/login',
        function (req, res, next) {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.body)
            next()
        },
        passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        }
    )
    
    router.get('/', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })
    
    router.post('/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })
    
module.exports = router;