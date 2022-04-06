const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    /* res.send('<h1>Router works !</h1>'); */
    res.render('pages/home')
    console.log(req.body.info);
});


module.exports = router;