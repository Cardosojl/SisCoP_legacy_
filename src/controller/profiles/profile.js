const express = require('express');
const {isAuth} =require('../../../config/isAuth');
const resolver =  require('../../../config/errorHandler');

const router = express.Router();

router.get('/logout', isAuth, resolver((req, res) => {
    req.logout(function(error) {
        if (error) { return next(error) }
        req.session.destroy()
        res.redirect('/')
      });
}));

module.exports = router;