const express = require("express");
const router = express.Router({mergeParams: true});
router.use('/auth', require('./auth.routes.js'));
router.use('/comment', require('./comment.routes'));
router.use('/videos', require('./videos.routes'));
router.use('/apps', require('./apps.routes.js'));
router.use('/user', require('./user.routes'));

module.exports = router