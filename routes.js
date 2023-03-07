const router = require('express').Router();
const user = require('./controller/userController');

router.post('/sign-up', user.addUsers );

//Future plan (adding middleware)
router.get('/users', user.getUsers );
router.get('/users/:id', user.getUsersByID );

module.exports = router;